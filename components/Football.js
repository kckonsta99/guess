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
  
  const selectRandomPlayer = () => {
    const keys = Object.keys(footballPlayers)
    const randomIndex = keys[Math.floor(Math.random() * keys.length)]
    setPlayer(footballPlayers[randomIndex])
    setShowName(false)
    console.log(randomIndex)
  }  

  const handleNextPlayer = () => {
    selectRandomPlayer();
  }

  const handleReset = () => {
    setPlayer(null)
    setShowName(false)
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
          {!showName && (
              <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={() => setShowName(true)}>Reveal Player</button>
          )}
          {showName && (
              <p className='text-xl rounded-lg	bg-[rgba(134,239,172,0.30)] p-4'>
                Player Name: <span className='font-bold'>{player.name}</span>
              </p>
            )}
          <div className='flex gap-4 align-center justify-center'>
            <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={handleNextPlayer}>Next Player</button>
            <button className={'border-2 border-solid border-green-400 rounded-lg overflow-hidden p-2 text-xl font-bold duration-200 hover:opacity-60 cursor-pointer greenShadow ' + fugaz.className} onClick={handleReset}>Home Page</button>
          </div>
        </div>
    </div>
  )
}
