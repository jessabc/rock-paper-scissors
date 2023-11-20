import logo from '../assets/images/logo.svg'
import Score from './Score'

interface Props {
  score: number
}

export default function Header({score}: Props) {
  return (
    <div className='flex justify-between border-2 border-blue-100 rounded-md p-2 gap-12'>
        <img src={logo} alt="logo" />
        <Score score={score}/>
    </div>
  )
}
