import React from "react";
import icon from '../../public/images/icon-star.svg'
import { colectionNumbers } from "./numbers";


const Card = ():JSX.Element => {

  return (
    <>
      <div className="card">
        <div className="card__contain">
          <img className="card__icon" src={icon} alt="" />
        </div>

        <h1 className="card__title">How did we do?</h1>
        <p className="card__information">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="numbers">

          {
            colectionNumbers.map((number, index) => 
              <>
                <div key={ index } className="numbers__item">
                  { number.numberButtons }
                </div>
              </>
            )
          }

          <button className="numbers__submit">Submit</button>

        </div>
      </div>
    </>
  )
}

export { Card }