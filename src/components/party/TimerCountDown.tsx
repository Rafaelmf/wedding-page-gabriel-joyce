import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

// const colorsList = [
//   "df0c06",
//   "fd4600",
//   "#ffb400",
//   "#00a364",
//   "#0075cb",
//   "#6f30a4",
// ];

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 10,
};

const renderTime = (dimension: string, time: number) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="text" style={{ marginRight: "5px" }}>
        {time}
      </div>
      <div className="text">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;

const TimerCountDown = () => {
  const [mounted, setMounted] = useState(false);
  const [timeData, setTimeData] = useState({
    differenceDays: 0,
    differenceSeconds: 0,
    daysDuration: 0,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const startTime = new Date();
      const endTime = new Date("2026-04-22");

      // Calculate difference in milliseconds, then convert to seconds
      const Difference_In_Time = Math.max(
        0,
        endTime.getTime() - startTime.getTime()
      );
      const Difference_In_Seconds = Math.floor(Difference_In_Time / 1000);
      const Difference_In_Days = Math.floor(Difference_In_Seconds / daySeconds);
      const daysDuration = Difference_In_Days * daySeconds;

      setTimeData({
        differenceDays: Difference_In_Days,
        differenceSeconds: Difference_In_Seconds,
        daysDuration,
      });
    };

    calculateTime();
    // Update every second
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by showing placeholder until client-side mounting
  if (!mounted) {
    return <div style={{ height: 120 }}></div>;
  }

  const { differenceDays, differenceSeconds, daysDuration } = timeData;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        borderRadius: "5px",
        padding: "1em",
      }}
    >
      <CountdownCircleTimer
        {...timerProps}
        colors="#fd4600"
        trailColor="#f2f2f2"
        duration={daysDuration}
        initialRemainingTime={daysDuration}
      >
        {({ color }) => (
          <span style={{ color }}>{renderTime("Dias", differenceDays)}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#ffb400"
        trailColor="#f2f2f2"
        duration={daySeconds}
        initialRemainingTime={differenceSeconds % daySeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: differenceSeconds - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Horas", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#00a364"
        trailColor="#f2f2f2"
        duration={hourSeconds}
        initialRemainingTime={differenceSeconds % hourSeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: differenceSeconds - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Minutos", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#0075cb"
        trailColor="#f2f2f2"
        duration={minuteSeconds}
        initialRemainingTime={differenceSeconds % minuteSeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: differenceSeconds - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }: any) => (
          <span style={{ color }}>
            {renderTime("Segundos", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default TimerCountDown;
