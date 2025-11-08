import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Pause, RotateCcw, Settings, Minimize2, Maximize2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Navigation } from "@/components/Navigation";

interface PomodoroSession {
  id: string;
  duration: number; // in seconds
  completedAt: string; // ISO timestamp
  type: "work" | "break";
}

export default function Pomodoro() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState<"work" | "break">("work");
  const [sessions, setSessions] = useLocalStorage<PomodoroSession[]>("manabi-pomodoro-sessions", []);
  const [showSettings, setShowSettings] = useState(false);
  const [isVideoMinimized, setIsVideoMinimized] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play notification sound
  const playNotification = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = 800;
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      // Fallback: notification will still show via toast
      console.log("Audio notification not available");
    }
  };

  // Timer logic
  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    setIsPaused(false);
    
    // Play notification sound
    playNotification();

    // Save session
    const session: PomodoroSession = {
      id: crypto.randomUUID(),
      duration: currentMode === "work" ? workMinutes * 60 : breakMinutes * 60,
      completedAt: new Date().toISOString(),
      type: currentMode,
    };
    setSessions([...sessions, session]);

    // Show notification
    toast({
      title: currentMode === "work" ? "作業完了！" : "休憩完了！",
      description: currentMode === "work" 
        ? "Great work! Time for a break." 
        : "Break time is over. Ready to work?",
    });

    // Switch mode
    if (currentMode === "work") {
      setCurrentMode("break");
      setTimeLeft(breakMinutes * 60);
    } else {
      setCurrentMode("work");
      setTimeLeft(workMinutes * 60);
    }
  };

  const handleStart = () => {
    if (timeLeft === 0) {
      setTimeLeft(currentMode === "work" ? workMinutes * 60 : breakMinutes * 60);
    }
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(currentMode === "work" ? workMinutes * 60 : breakMinutes * 60);
  };

  const handleApplySettings = () => {
    setTimeLeft(currentMode === "work" ? workMinutes * 60 : breakMinutes * 60);
    setShowSettings(false);
    if (isRunning) {
      handleReset();
    }
    toast({
      title: "設定を更新しました",
      description: "Timer settings have been updated",
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const progress = currentMode === "work" 
    ? ((workMinutes * 60 - timeLeft) / (workMinutes * 60)) * 100
    : ((breakMinutes * 60 - timeLeft) / (breakMinutes * 60)) * 100;

  // Extract video ID from YouTube URL
  const videoId = "jfKfPfyJRdk";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-5xl animate-bounce" style={{ animationDuration: '2s' }}>🍅</div>
                <h1 className="text-3xl font-light tracking-tight text-foreground">
                  ポモドーロ
                </h1>
              </div>
              <p className="text-muted-foreground font-light">
                Stay focused and productive with the Pomodoro Technique
              </p>
            </div>
            <Button
              onClick={() => setShowSettings(!showSettings)}
              variant="outline"
              size="icon"
              className="font-light"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Timer Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Timer Card */}
              <Card className="p-8 border-border animate-fade-in">
                <div className="space-y-6">
                  {/* Mode Badge */}
                  <div className="flex items-center justify-center">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-light ${
                        currentMode === "work"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-green-500/10 text-green-500 border border-green-500/20"
                      }`}
                    >
                      {currentMode === "work" ? "作業時間" : "休憩時間"}
                    </div>
                  </div>

                  {/* Timer Display */}
                  <div className="text-center">
                    {/* Countdown Clock */}
                    <div className="relative w-80 h-80 mx-auto mb-6 flex items-center justify-center">
                      {/* Progress Circle */}
                      <div className="absolute inset-0">
                        <svg className="transform -rotate-90 w-full h-full">
                          <circle
                            cx="160"
                            cy="160"
                            r="150"
                            stroke="hsl(var(--muted))"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="160"
                            cy="160"
                            r="150"
                            stroke={currentMode === "work" ? "hsl(var(--primary))" : "hsl(34 197% 94%)"}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 150}`}
                            strokeDashoffset={`${2 * Math.PI * 150 * (1 - progress / 100)}`}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-linear"
                          />
                        </svg>
                      </div>
                      
                      {/* Clock Face */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        {/* Main Time Display */}
                        <div className={`text-7xl font-mono font-light text-foreground mb-2 transition-all duration-300 ${isRunning ? 'scale-105' : ''}`}>
                          {formatTime(timeLeft)}
                        </div>
                        
                        {/* Mode Indicator */}
                        <div className={`px-4 py-1.5 rounded-full text-sm font-light ${
                          currentMode === "work"
                            ? "bg-primary/10 text-primary"
                            : "bg-green-500/10 text-green-500"
                        }`}>
                          {currentMode === "work" ? "作業中" : "休憩中"}
                        </div>
                        
                        {/* Progress Percentage */}
                        <div className="mt-4 text-sm text-muted-foreground font-light">
                          {Math.round(progress)}% complete
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-3">
                    {!isRunning && !isPaused && (
                      <Button
                        onClick={handleStart}
                        size="lg"
                        className="font-light gap-2"
                      >
                        <Play className="h-5 w-5" />
                        Start
                      </Button>
                    )}
                    {isRunning && (
                      <Button
                        onClick={handlePause}
                        size="lg"
                        variant="outline"
                        className="font-light gap-2"
                      >
                        <Pause className="h-5 w-5" />
                        Pause
                      </Button>
                    )}
                    {isPaused && (
                      <>
                        <Button
                          onClick={handleResume}
                          size="lg"
                          className="font-light gap-2"
                        >
                          <Play className="h-5 w-5" />
                          Resume
                        </Button>
                        <Button
                          onClick={handleReset}
                          size="lg"
                          variant="outline"
                          className="font-light gap-2"
                        >
                          <RotateCcw className="h-5 w-5" />
                          Reset
                        </Button>
                      </>
                    )}
                    {!isRunning && !isPaused && timeLeft > 0 && timeLeft < (currentMode === "work" ? workMinutes * 60 : breakMinutes * 60) && (
                      <Button
                        onClick={handleReset}
                        size="lg"
                        variant="outline"
                        className="font-light gap-2"
                      >
                        <RotateCcw className="h-5 w-5" />
                        Reset
                      </Button>
                    )}
                  </div>

                  {/* Settings Panel */}
                  {showSettings && (
                    <div className="pt-6 border-t border-border space-y-4 animate-fade-in">
                      <h3 className="text-lg font-light text-foreground">設定</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="work-minutes" className="font-light">
                            Work Duration (minutes)
                          </Label>
                          <Input
                            id="work-minutes"
                            type="number"
                            min="1"
                            max="120"
                            value={workMinutes}
                            onChange={(e) => setWorkMinutes(parseInt(e.target.value) || 25)}
                            className="font-light"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="break-minutes" className="font-light">
                            Break Duration (minutes)
                          </Label>
                          <Input
                            id="break-minutes"
                            type="number"
                            min="1"
                            max="60"
                            value={breakMinutes}
                            onChange={(e) => setBreakMinutes(parseInt(e.target.value) || 5)}
                            className="font-light"
                          />
                        </div>
                      </div>
                      <Button
                        onClick={handleApplySettings}
                        className="w-full font-light"
                      >
                        Apply Settings
                      </Button>
                    </div>
                  )}
                </div>
              </Card>

              {/* Statistics */}
              <Card className="p-6 border-border">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-lg font-light text-foreground">統計</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-3xl mb-2">🍅</div>
                    <div className="text-2xl font-light text-foreground">
                      {sessions.filter(s => s.type === "work").length}
                    </div>
                    <div className="text-sm text-muted-foreground font-light">Work Sessions</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                    <div className="text-3xl mb-2">☕</div>
                    <div className="text-2xl font-light text-foreground">
                      {sessions.filter(s => s.type === "break").length}
                    </div>
                    <div className="text-sm text-muted-foreground font-light">Break Sessions</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="text-2xl font-light text-foreground">
                      {Math.round(sessions.filter(s => s.type === "work").reduce((acc, s) => acc + s.duration, 0) / 60)}
                    </div>
                    <div className="text-sm text-muted-foreground font-light">Total Minutes</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Video Section */}
            <div className="space-y-6">
              <Card className="border-border animate-fade-in overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between bg-card">
                  <h3 className="font-light text-foreground">Focus Music</h3>
                  <Button
                    onClick={() => setIsVideoMinimized(!isVideoMinimized)}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    {isVideoMinimized ? (
                      <Maximize2 className="h-4 w-4" />
                    ) : (
                      <Minimize2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {!isVideoMinimized && (
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={youtubeEmbedUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Pomodoro Focus Music"
                    />
                  </div>
                )}
              </Card>

              {/* Info Card */}
              <Card className="p-6 border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🍅</div>
                  <h3 className="text-lg font-light text-foreground">ポモドーロ技法</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground font-light">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <p>Set your work timer (default: 25 minutes)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <p>Work on your task until the timer rings</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <p>Take a short break (default: 5 minutes)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <p>Repeat and take a longer break after 4 sessions</p>
                  </div>
                </div>
                
                {/* Fun Fact */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-light italic">
                    💡 "Pomodoro" means "tomato" in Italian. The technique was named after a tomato-shaped kitchen timer!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

