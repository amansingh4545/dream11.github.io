import React from 'react'

// import match
import Match from './match'

export default function Livematch() {
  return (
    <div>
      <div className="hct_title">
          <span>
            Today's Match List
          </span>
        </div>
        <Match matchid='1' join={true} />
        <Match matchid="2" join={true} />
        <Match matchid="3" join={true} />
        <Match matchid="4" join={true} />
    </div>
  )
}
