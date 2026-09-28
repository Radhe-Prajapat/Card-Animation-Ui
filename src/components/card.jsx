import React, { useState } from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={props.Logo} alt="" />
          <h2>{props.company}</h2>
        </div>
        <div className='card-back'>
          <div className="top">
            <img src={props.Logo} alt="" />
            <button onClick={(e) => e.stopPropagation()}>Save <Bookmark size={17} color='#111'/></button>
          </div>
          <div className="center">
              <h3>{props.company}<span>{props.date}</span></h3>
              <h2>{props.post}</h2>
              <div className='tag'>
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
              </div>
          </div>
          <div className="bottom">
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button onClick={(e) => e.stopPropagation()}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card ;

