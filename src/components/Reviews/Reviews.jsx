import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'Api';
import styles from './Reviews.module.css';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews?.length ? (
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
};

Reviews.propTypes = {
  movieId: PropTypes.number,
};

export default Reviews;
