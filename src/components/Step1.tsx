import paperIcon from '../assets/images/icon-paper.svg'
import scissorsIcon from '../assets/images/icon-scissors.svg'
import rockIcon from '../assets/images/icon-rock.svg'
import triangleIcon from '../assets/images/bg-triangle.svg'

interface Props {
  setPlayersChoice: React.Dispatch<React.SetStateAction<string>>;
  setShowStep1: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStep2: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Step1({setPlayersChoice, setShowStep1, setShowStep2}: Props) {

function handleClick(icon: string) {
  setPlayersChoice(icon)
  setShowStep1(false)
  setShowStep2(true)
}

  return (
    <div className=' relative'>
        <img src={triangleIcon} alt="triangle" />

        <div 
          className='absolute -top-10 -left-10 bg-white w-28 h-28 rounded-full flex justify-center items-center border-8 border-blue-500 cursor-pointer hover:bg-blue-100' 
          onClick={() => handleClick('icon-paper')}>
          <img src={paperIcon} alt="paper icon" />
        </div>
        
        <div 
          className='absolute -top-10 -right-10 bg-white w-28 h-28 rounded-full flex justify-center items-center border-8 border-yellow-500 cursor-pointer hover:bg-blue-100' 
          onClick={() => handleClick('icon-scissors')}>
          <img src={scissorsIcon} alt="scissor icon"  />
        </div>
       
       <div 
          className='absolute bottom-0  right-0 left-0  my-0 mx-auto bg-white w-28 h-28 rounded-full flex justify-center items-center border-8 border-pink-500 cursor-pointer hover:bg-blue-100' 
          onClick={() => handleClick('icon-rock')}>
          <img src={rockIcon} alt="rock icon"  /> 
       </div>
      
    </div>
  )
}
