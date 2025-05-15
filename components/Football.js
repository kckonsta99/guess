'use client'
import { Fugaz_One } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { footballPlayers } from '@/utils'

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function Basket() {
  const router = useRouter();
  const [player, setPlayer] = useState(null);
  const [showName, setShowName] = useState(false);
   const [userGuess, setUserGuess] = useState('')
    const [result, setResult] = useState(false)
    const [inputClass, setInputClass] = useState(' border-2 border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ')
  
  const selectRandomPlayer = () => {
    const keys = Object.keys(footballPlayers)
    const randomIndex = keys[Math.floor(Math.random() * keys.length)]
    setPlayer(footballPlayers[randomIndex])
    setShowName(false)
    console.log(randomIndex)
  }  

 const checkAnswer = () => {
    const cleanedGuess = userGuess.trim().toLowerCase();
    const correctName = player.name.toLowerCase();
    

    let matchCount = 0;
    for (let char of cleanedGuess) {
      if (correctName.includes(char)) {
        matchCount++;
    }

    const similarity = matchCount / correctName.length;
    let isCorrect = null
    isCorrect = similarity >= 0.5;
    console.log("fff" ,similarity)
    if(!isCorrect) {
      setInputClass(' border-2 border-rose-700 focus:outline-none focus:ring-1 focus:ring-rose-700 ')
    } else {
      setInputClass(' border-2 border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 ')
    }

    setResult(isCorrect);

  }

  }

  const handleNextPlayer = () => {
    setInputClass(' border-2 border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ')
    setUserGuess('');
    setResult(false);
    selectRandomPlayer();
  }

  const handleReset = () => {
    setInputClass(' border-2 border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ')
    setUserGuess('');
    setPlayer(null)
    setShowName(false)
    setResult(false)
    router.push('/')
  }
  useEffect(() => {
    selectRandomPlayer()
  }, [])


  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-6 '>
        <h3 className='text-3xl font-semibold '>Football Player Bio:</h3>
        <div className='border-2 border-green-400 rounded-xl p-4 bg-[rgba(134,239,172,0.30)] ShadowBio '>
          {player ? (player.career.map((line, index) => {
            return (
              <p className='text-base sm:text-lg md:text-xl' key={index}>· {line}</p>
            )
          })) : <p>loading...</p>}
        </div>
        <div className='flex flex-col gap-8'>
          {(!showName && !result) && (
              <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={() => setShowName(true)}>Reveal Player</button>
          )}
          {(showName || result) && (

              <button className='border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 duration-200 hover:opacity-60 cursor-pointer greenShadow ' onClick={() => setShowName(false)}><p className='text-xl font-semibold '>Press to Hide</p>
                <p className='text-xl rounded-lg	bg-[rgba(134,239,172,0.30)] p-4'>
                  Player Name: <span className='font-bold'>{player.name}</span>
                </p>
              </button>
            )}
          <div className='flex justify-center align-center gap-2'>
            <input className={'bg-neutral-900 rounded-lg p-2 font-semibold ' + inputClass} type="text" id="playerGuess" placeholder=" Guess the player" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
            <button className='border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow' onClick={() => checkAnswer()}>submit</button>
          </div>
          <div className='flex gap-4 align-center justify-center'>
            <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={handleNextPlayer}>Next Player</button>
            <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={handleReset}>Home Page</button>
          </div>
        </div>
    </div>
  )
}
