import { useEffect, useState } from "react";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";

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

  return (
    <div className={css.app}>
      <Description />
      <Options onOptionSelect={updateFeedback} onReset={resetFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}
