import React from "react";
import icon from '../../public/images/icon-star.svg'
import { colectionNumbers } from "./numbers";

import './card.scss'


const Card = ():JSX.Element => {

  return (
    <>
    <main>
      <div className="card">
        <div className="card__contain">
          <img className="bg-bg-image p-3 rounded-full" width={45} src={icon} alt="icon" />
        </div>

        <h1 className="text-white text-xl mt-5 mb-5">How did we do?</h1>
        <p className="text-white opacity-70 font-light mb-5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="numbers">

          {
            colectionNumbers.map((number, index) => 
              <>
                <div tabIndex={0} key={ index } className="bg-bg-image px-6 py-4 rounded-full cursor-pointer focus:bg-orange-500 hover:bg-hover-btn transition .3s">
                  <span className="text-white opacity-70 text-sm">{ number.numberButtons }</span> 
                </div>
              </>
            )
          }


        </div>
        <button className="card__submit">Submit</button>
      </div>
    </main>
    </>
  )
}

export { Card }