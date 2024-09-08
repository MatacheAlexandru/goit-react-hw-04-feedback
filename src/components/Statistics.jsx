import React from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <p className={styles.statisticItem}>Good: {good}</p>
    <p className={styles.statisticItem}>Neutral: {neutral}</p>
    <p className={styles.statisticItem}>Bad: {bad}</p>
    <p className={styles.statisticItem}>Total: {total}</p>
    <p className={styles.statisticItem}>
      Positive feedback: {positivePercentage}%
    </p>
    <StarRating percentage={positivePercentage} />
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
