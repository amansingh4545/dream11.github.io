import React from 'react'

import Home_intro from '../components/home_intro'
import Hct from '../components/hct'
import Livematch from '../components/livematch'
import Reviews from '../components/reviews'

export default function Homepage(){
  return (
    <div className="home">
        <Home_intro />
        <Hct />
        <Livematch />
        <Reviews />
    </div>
  )
}
