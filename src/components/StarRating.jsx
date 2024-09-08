import React from "react";
import PropTypes from "prop-types";
import styles from "./StarRating.module.css";

const StarRating = ({ percentage }) => {
  const totalStars = 5;
  const filledStars = (percentage / 100) * totalStars;

  return (
    <div className={styles.starRatingContainer}>
      <div className={styles.starContainer}>
        {[...Array(totalStars)].map((_, index) => {
          const starPercentage = Math.min(filledStars - index, 1) * 100;
          return (
            <div key={index} className={styles.starWrapper}>
              <div className={styles.starBackground}>★</div>
              <div
                className={styles.star}
                style={{
                  width: `${starPercentage > 0 ? starPercentage : 0}%`,
                }}
              >
                ★
              </div>
            </div>
          );
        })}
      </div>
      {/* Afișăm procentul calculat pentru stele */}
      <span className={styles.percentageLabel}>{filledStars.toFixed(2)}</span>
    </div>
  );
};

StarRating.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default StarRating;
