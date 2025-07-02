import Notification from "./Notification";

export default function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;

  if (!total) {
    return <Notification />;
  }

  const positiveFeedbackPercentage = Math.round((feedback.good / total) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
}
