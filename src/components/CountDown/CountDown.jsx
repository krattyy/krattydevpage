import { useState, useEffect } from "react";

export default function useCountDown() {
  const [secondsLeft, setSecondsLeft] = useState(null);

  useEffect(() => {
    if (secondsLeft === null || secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  const start = (seconds) => {
    setSecondsLeft(seconds);
  };

  return { secondsLeft, start };
}
