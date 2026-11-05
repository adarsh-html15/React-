import React from 'react'

function Card(props) {

  return (
    <>
      <div className="card">
        <div className="img">
          <img src="https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg" alt="" />
        </div>
        <h1>{props.username},{props.age}</h1>
        <div className="about">
          Hi, This is {props.username}.
        </div>
          <button>know more</button>
      </div>
    </>
  )
}

export default Card