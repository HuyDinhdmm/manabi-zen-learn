import { useState, useEffect, useRef, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { StudyLog } from "@/types/studyLog";

export type TimerState = "idle" | "running" | "paused";

export interface UseStudyTimerReturn {
  timerState: TimerState;
  elapsedSeconds: number;
  start: () => void;
  pause: () => void;
  stop: () => void;
  reset: () => void;
  formatTime: (seconds: number) => string;
}

interface UseStudyTimerOptions {
  goalId: string;
  onStart?: () => void;
  onPause?: () => void;
  onStop?: (log: StudyLog) => void;
  onReset?: () => void;
}

export function useStudyTimer({
  goalId,
  onStart,
  onPause,
  onStop,
  onReset,
}: UseStudyTimerOptions): UseStudyTimerReturn {
  const [timerState, setTimerState] = useState<TimerState>("idle");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [logs, setLogs] = useLocalStorage<StudyLog[]>("manabi-study-logs", []);
  const startTimeRef = useRef<string | null>(null); // Store ISO timestamp
  const sessionStartTimeRef = useRef<number | null>(null); // Store Date.now() for current session
  const accumulatedSecondsRef = useRef<number>(0); // Accumulated seconds from previous sessions
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Format time as HH:MM:SS
  const formatTime = useCallback((seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, []);

  // Update elapsed time every second
  useEffect(() => {
    if (timerState === "running" && sessionStartTimeRef.current !== null) {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const sessionElapsed = Math.floor((now - sessionStartTimeRef.current!) / 1000);
        const totalElapsed = accumulatedSecondsRef.current + sessionElapsed;
        setElapsedSeconds(totalElapsed);
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
  }, [timerState]);

  const start = useCallback(() => {
    if (timerState === "idle") {
      // Starting fresh
      startTimeRef.current = new Date().toISOString();
      accumulatedSecondsRef.current = 0;
      sessionStartTimeRef.current = Date.now();
      setElapsedSeconds(0);
    } else if (timerState === "paused") {
      // Resuming from pause - don't reset accumulated time, but start new session
      sessionStartTimeRef.current = Date.now();
      // elapsedSeconds already has the accumulated value from pause
    }
    setTimerState("running");
    onStart?.();
  }, [timerState, onStart]);

  const pause = useCallback(() => {
    if (timerState === "running" && sessionStartTimeRef.current !== null) {
      // Add current session time to accumulated time
      const sessionElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
      const newAccumulated = accumulatedSecondsRef.current + sessionElapsed;
      accumulatedSecondsRef.current = newAccumulated;
      setElapsedSeconds(newAccumulated);
      sessionStartTimeRef.current = null;
      setTimerState("paused");
      onPause?.();
    }
  }, [timerState, onPause]);

  const stop = useCallback(() => {
    if (timerState !== "idle") {
      const endTime = new Date().toISOString();
      
      // Calculate final elapsed seconds
      let finalElapsedSeconds = elapsedSeconds;
      if (timerState === "running" && sessionStartTimeRef.current !== null) {
        const sessionElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
        finalElapsedSeconds = accumulatedSecondsRef.current + sessionElapsed;
      }

      // Use stored start time or calculate from elapsed
      const startTime = startTimeRef.current || new Date(Date.now() - finalElapsedSeconds * 1000).toISOString();

      const log: StudyLog = {
        goalId,
        start: startTime,
        end: endTime,
        durationSec: finalElapsedSeconds,
      };

      // Save to localStorage
      setLogs([...logs, log]);

      // Reset timer
      startTimeRef.current = null;
      sessionStartTimeRef.current = null;
      accumulatedSecondsRef.current = 0;
      setElapsedSeconds(0);
      setTimerState("idle");

      onStop?.(log);
    }
  }, [timerState, elapsedSeconds, goalId, logs, setLogs, onStop]);

  const reset = useCallback(() => {
    startTimeRef.current = null;
    sessionStartTimeRef.current = null;
    accumulatedSecondsRef.current = 0;
    setElapsedSeconds(0);
    setTimerState("idle");
    onReset?.();
  }, [onReset]);

  return {
    timerState,
    elapsedSeconds,
    start,
    pause,
    stop,
    reset,
    formatTime,
  };
}

