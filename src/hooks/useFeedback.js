import { useState } from "react";

const useFeedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  return {
    feedback,
    handleLeaveFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  };
};

export default useFeedback;
