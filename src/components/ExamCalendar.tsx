import React, { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Pencil, Trash2 } from "lucide-react";
import { Exam } from "@/types/exam";

interface ExamCalendarProps {
  exams: Exam[];
  onEdit: (exam: Exam) => void;
  onDelete: (id: string) => void;
}

export const ExamCalendar = ({ exams, onEdit, onDelete }: ExamCalendarProps) => {
  const currentMonth = new Date();
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const examsByDate = useMemo(() => {
    const map = new Map<string, Exam[]>();
    exams.forEach((exam) => {
      const dateKey = exam.date;
      if (!map.has(dateKey)) {
        map.set(dateKey, []);
      }
      map.get(dateKey)!.push(exam);
    });
    return map;
  }, [exams]);

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(
        currentMonth.getMonth() + 1
      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      days.push({
        day,
        dateStr,
        exams: examsByDate.get(dateStr) || [],
      });
    }
    return days;
  }, [firstDayOfMonth, daysInMonth, currentMonth, examsByDate]);

  const monthName = currentMonth.toLocaleString("en-US", { month: "long" });
  const year = currentMonth.getFullYear();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light text-foreground">
          {monthName} {year}
        </h2>
      </div>

      {/* Calendar Grid */}
      <Card className="p-6 border-border bg-card overflow-x-auto">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="h-10 flex items-center justify-center font-light text-sm text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((dayData, idx) => (
            <div
              key={idx}
              className={`min-h-[100px] p-2 rounded-lg border transition-all duration-200 ${
                dayData
                  ? dayData.exams.length > 0
                    ? "bg-emerald-100 border-emerald-500 border-2"
                    : "bg-background border-border hover:border-emerald-400"
                  : "bg-muted/20 border-transparent"
              }`}
            >
              {dayData && (
                <div className="space-y-2 h-full flex flex-col">
                  <div className="text-sm font-light text-foreground font-semibold">
                    {dayData.day}
                  </div>
                  <div className="flex-1 space-y-1 overflow-y-auto">
                    {dayData.exams.map((exam) => (
                      <div
                        key={exam.id}
                        className="text-xs bg-emerald-500 text-white rounded p-1 font-light truncate group hover:bg-emerald-600 transition-colors shadow-sm"
                        title={exam.title}
                      >
                        <div className="truncate">{exam.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Exams List View */}
      <div className="space-y-4">
        <h3 className="text-xl font-light text-foreground">All Exams</h3>
        {exams.length === 0 ? (
          <Card className="p-8 border-border bg-card text-center">
            <p className="text-muted-foreground font-light">
              No exams scheduled yet. Add one to get started!
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {exams
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((exam) => (
                <Card
                  key={exam.id}
                  className="p-4 border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-light text-foreground">
                            {exam.title}
                          </h4>
                          <Badge variant="outline" className="text-xs font-light">
                            {exam.subject}
                          </Badge>
                        </div>
                        {exam.description && (
                          <p className="text-sm text-muted-foreground font-light line-clamp-2">
                            {exam.description}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onEdit(exam)}
                          className="h-8 w-8 p-0"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onDelete(exam.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Exam details */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground font-light">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(exam.date + "T00:00:00").toLocaleDateString(
                            "en-US",
                            { weekday: "short", month: "short", day: "numeric" }
                          )}
                        </span>
                      </div>
                      {exam.time && (
                        <div className="flex items-center gap-2 text-muted-foreground font-light">
                          <Clock className="h-4 w-4" />
                          <span>{exam.time}</span>
                          {exam.duration && (
                            <span className="text-xs">({exam.duration} min)</span>
                          )}
                        </div>
                      )}
                      {exam.location && (
                        <div className="flex items-center gap-2 text-muted-foreground font-light md:col-span-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exam.location}</span>
                        </div>
                      )}
                    </div>

                    {exam.notes && (
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground font-light italic">
                          💡 {exam.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
