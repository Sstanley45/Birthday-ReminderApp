import React from 'react'

export const Card = (props) => {
  return (
    <div className='user-card'>
        <img src={props.img} alt="" className='img-card' />
        <h3> {props.name}</h3>
        <div>
              <h5>{props.daysRemaining } Days to BirthDay</h5>
        </div>
        <div>
              <h4>Age: {props.age  }  50 years</h4>
        </div>
        

    </div>
  )
}
