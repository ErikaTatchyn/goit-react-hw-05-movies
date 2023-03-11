import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => (
  <>
    {reviews.length ? (
      <ul className={styles.reviews}>
        {reviews.map(review => (
          <li key={review.id} className={styles.review}>
            <h3 className={styles.reviewAuthor}>Author: {review.author}</h3>
            <p className={styles.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No reviews found</p>
    )}
  </>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
