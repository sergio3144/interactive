import './back.scss'
import imageBack from '../../public/images/illustration-thank-you.svg'

interface NumberSelected {
  selected: number | undefined,
  length: number,
  id?: string
}

const BackCard = ( { selected, length }:NumberSelected ):JSX.Element => {
  return (
    <>
      <div className="back">
        <img className='back__image' src={ imageBack } alt="image-back" />
        <div className='mt-5 bg-bg-image max-w-200 m-auto rounded-lg py-1'>
          <span className='text-color-orange font-light'>You selected { selected } out of { length }</span>
        </div>

        <h1 className='text-2xl text-white my-4'>Thanck you!</h1>

        <p className='text-white opacity-70 font-light'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </>
  )
}

export { BackCard }
export type { NumberSelected }