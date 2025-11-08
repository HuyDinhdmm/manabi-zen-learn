import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Square, RotateCcw } from "lucide-react";
import { useStudyTimer } from "@/hooks/useStudyTimer";
import { toast } from "@/hooks/use-toast";

interface StudyTimerButtonProps {
  goalId: string;
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost";
  showTime?: boolean;
  compact?: boolean;
  onStop?: (durationHours: number) => void;
}

export const StudyTimerButton = ({
  goalId,
  size = "default",
  variant = "outline",
  showTime = true,
  compact = false,
  onStop,
}: StudyTimerButtonProps) => {
  const { timerState, elapsedSeconds, start, pause, stop, reset, formatTime } = useStudyTimer({
    goalId,
    onStart: () => {
      toast({
        title: "学習開始",
        description: "学習タイマーを開始しました",
      });
    },
    onPause: () => {
      toast({
        title: "一時停止",
        description: "学習タイマーを一時停止しました",
      });
    },
    onStop: (log) => {
      const durationHours = log.durationSec / 3600;
      toast({
        title: "学習完了",
        description: `${formatTime(log.durationSec)} (${durationHours.toFixed(2)}h) 学習しました`,
      });
      // Call parent callback to update goal hours
      onStop?.(durationHours);
    },
  });

  const handleClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    stop();
    // Note: onStop will be called from useStudyTimer's onStop callback with the final duration
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
        {showTime && timerState !== "idle" && (
          <span className="text-sm font-mono text-foreground font-light">
            {formatTime(elapsedSeconds)}
          </span>
        )}
        {timerState === "idle" && (
          <Button
            size={size}
            variant={variant}
            onClick={(e) => handleClick(e, start)}
            className="font-light gap-2"
          >
            <Play className="h-4 w-4" />
            Start
          </Button>
        )}
        {timerState === "running" && (
          <div className="flex items-center gap-1">
            <Button
              size={size}
              variant={variant}
              onClick={(e) => handleClick(e, pause)}
              className="font-light gap-2"
            >
              <Pause className="h-4 w-4" />
              Pause
            </Button>
            <Button
              size={size}
              variant={variant}
              onClick={handleStop}
              className="font-light gap-2"
            >
              <Square className="h-4 w-4" />
              Stop
            </Button>
          </div>
        )}
        {timerState === "paused" && (
          <div className="flex items-center gap-1">
            <Button
              size={size}
              variant={variant}
              onClick={(e) => handleClick(e, start)}
              className="font-light gap-2"
            >
              <Play className="h-4 w-4" />
              Resume
            </Button>
            <Button
              size={size}
              variant={variant}
              onClick={handleStop}
              className="font-light gap-2"
            >
              <Square className="h-4 w-4" />
              Stop
            </Button>
            <Button
              size={size}
              variant="ghost"
              onClick={(e) => handleClick(e, reset)}
              className="font-light"
              title="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {showTime && timerState !== "idle" && (
        <div className="text-center">
          <span className="text-2xl font-mono text-foreground font-light">
            {formatTime(elapsedSeconds)}
          </span>
        </div>
      )}
      <div className="flex items-center gap-2 justify-center">
        {timerState === "idle" && (
          <Button
            size={size}
            variant={variant}
            onClick={(e) => handleClick(e, start)}
            className="font-light gap-2"
          >
            <Play className="h-4 w-4" />
            Start Study
          </Button>
        )}
        {timerState === "running" && (
          <>
            <Button
              size={size}
              variant={variant}
              onClick={(e) => handleClick(e, pause)}
              className="font-light gap-2"
            >
              <Pause className="h-4 w-4" />
              Pause
            </Button>
            <Button
              size={size}
              variant={variant}
              onClick={handleStop}
              className="font-light gap-2"
            >
              <Square className="h-4 w-4" />
              Stop
            </Button>
          </>
        )}
        {timerState === "paused" && (
          <>
            <Button
              size={size}
              variant={variant}
              onClick={(e) => handleClick(e, start)}
              className="font-light gap-2"
            >
              <Play className="h-4 w-4" />
              Resume
            </Button>
            <Button
              size={size}
              variant={variant}
              onClick={handleStop}
              className="font-light gap-2"
            >
              <Square className="h-4 w-4" />
              Stop
            </Button>
            <Button
              size={size}
              variant="ghost"
              onClick={(e) => handleClick(e, reset)}
              className="font-light"
              title="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

