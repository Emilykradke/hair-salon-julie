import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div className='review-container'>
        <div className='review'>
          <div className='review-1'>
            "Just left my appointment. I feel sassy and rejuvenated!!"
          </div>
          <div className='review-2'>
            "Love that she got to know my hair & my lifestyle as well as other factors to truly give my hair new life. Price was great & she is very knowledgeable too. I highly recommend you give Julie the chance to change your life too."
          </div>
          <div className='author'>
            - Penny Boudreaux Rodriguez
          </div>
        </div>
      </div>
    );
  }
}

export default Review;