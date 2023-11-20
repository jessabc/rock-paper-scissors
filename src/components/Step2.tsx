import { useEffect, useState } from "react";

const choices = ['icon-rock', 'icon-paper', 'icon-scissors']

const combos: any = {
  rockVSscissors: 'You Win',
  paperVSrock: 'You Win',
  scissorsVSpaper: 'You Win',
  rockVSrock: 'Draw', 
  paperVSpaper: 'Draw', 
  scissorsVSscissors: 'Draw',
  rockVSpaper: 'House Wins', paperVSscissors: 'House Wins',scissorsVSrock: 'House Wins', 
}

interface Props {
  playersChoice: string;
  setShowStep1: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStep2: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export default function Step2({playersChoice, setShowStep1, setShowStep2, setScore, score}: Props) { 

  const [houseChoice, setHouseChoice] = useState('')
  const [winner, setWinner] = useState('')

  const randomNum = Math.floor((Math.random() * 3) );

  const getHouseChoice = () => {
    setHouseChoice(choices[randomNum])
  }

  const getWinner = () => {
    const player = playersChoice.split('-')[1]
    const house = choices[randomNum]?.split('-')[1]
    const thisCombo = `${player}VS${house}`

    for (const key in combos) {
      if(key === thisCombo) {
        const result = combos[key]
        setWinner(result)
        if(result === 'You Win') {       
          setScore(score + 1)
        }
      }
    }
  }

  useEffect(() => {

    setTimeout(() => {
      getHouseChoice()
    }, 1000);
    
    setTimeout(() => {
      getWinner()
    }, 2000);

  }, [])


  const handleClick = () => {
    setShowStep2(false)
    setShowStep1(true)
  }

  const playersBorderColor = () => {
    switch(playersChoice) {
      case 'icon-paper':
        return 'blue'
        break;
      case 'icon-scissors':
        return 'yellow'
        break;
      default:
        return 'pink'
    }
  }

  const housesBorderColor = () => {
    switch(houseChoice) {
      case 'icon-paper':
        return 'blue'
        break;
      case 'icon-scissors':
        return 'yellow'
        break;
        case 'icon-rock':
          return 'pink'
          break;
      default:
        return 'white'
    }
  }

  return (
    <div className='grid grid-cols-2'>

      <div className=' flex flex-col justify-center items-center gap-2 '>
        <div className={`bg-white w-28 h-28 rounded-full flex justify-center items-center border-8 border-${playersBorderColor()}-500`}>
          <img src={`/src/assets/images/${playersChoice}.svg`} alt="" />
        </div>
        <p className='uppercase text-blue-100 font-bold text-xl'>you picked</p>
      </div>

      <div className=' flex flex-col justify-center items-center gap-2 '>
        <div className={`bg-white w-28 h-28 rounded-full flex justify-center items-center border-8 border-${housesBorderColor()}-500`}>
           <img src={`/src/assets/images/${houseChoice}.svg`} alt="" />
        </div>
        <p className='uppercase text-blue-100 font-bold text-xl'>the house picked</p>
      </div>
       
      <div className='col-span-2 flex flex-col justify-center items-center gap-1 mt-5 h-24 '>
        {winner && 
        <div> 
          <p className='text-blue-100 text-4xl font-bold pb-2'>{winner}</p>
          <button className='uppercase bg-blue-100 rounded-md text-sm tracking-wider text-blue-950 w-full py-3 hover:bg-blue-200' onClick={handleClick}>play again</button>
        </div>}
      </div>
    
    </div>
  )
}

