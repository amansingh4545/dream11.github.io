import React from 'react'

// import review css
import '../asset/css/review.css'

export default function Review() {
  return (
    <div>
        
        <div className="card">
    <img src="game_image.jpg" alt="Game Image"/>
    <h2 className="title">Game Title</h2>
    <p className="description">Game Description</p>
    <div className="rating">
      <span className="stars">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </span>
      <span className="score">5.0</span>
    </div>
    <a className="button" href="#">Read Review</a>
  </div>
    </div>
  )
}
