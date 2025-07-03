import { useEffect, useState } from "react";

import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";
import css from "./App.module.css";

const STORAGE_KEY = "feedbackData";

const defaultFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    return savedFeedback ? JSON.parse(savedFeedback) : defaultFeedback;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback(defaultFeedback);
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const hasSomeFeedback = total > 0;
  const positivePercentage = hasSomeFeedback
    ? Math.round((good / total) * 100)
    : 0;

  return (
    <div className={css.app}>
      <Description />
      <Options
        onOptionSelect={updateFeedback}
        onReset={resetFeedback}
        resetShown={hasSomeFeedback}
      />
      {hasSomeFeedback ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
