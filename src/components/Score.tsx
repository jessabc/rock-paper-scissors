interface Props {
  score: number
}

export default function Score({score}: Props) {
  return (
    <div className='bg-blue-100 rounded py-2 px-6 flex flex-col justify-between items-center'>
      <p className='uppercase font-bold text-slate-600 text-xl'>Score</p>
      <p className='font-bold text-4xl text-slate-600'>{score}</p>
    </div>
  )
}
