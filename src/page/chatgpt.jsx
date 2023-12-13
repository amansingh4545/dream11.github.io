import React from 'react';

import '../asset/css/chatgpt.css'

const ReviewCard = ({ review }) => {
  const { content, rating, author, profilePic } = review;

  // Function to render golden stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star" role="img" aria-label="star">⭐</span>);
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="user-profile">
        <img src={profilePic} alt="User Profile" className="profile-pic" />
        <h3 className="user-name">{author}</h3>
      </div>
      <p className="review-content">{content}</p>
      <div className="rating">
        {renderStars()}
      </div>
    </div>
  );
};

export default ReviewCard;
