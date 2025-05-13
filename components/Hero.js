'use client'
import { Fugaz_One } from 'next/font/google'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function Hero() {

  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState(null)

  const handleSelection = (sport) => {
    setSelectedSport(sport)
    console.log("selected", sport)
    router.push(`/dashboard?sport=${sport}`);
  }


  return (
    <div className='py-4 md:py-12 flex flex-col gap-10 md:gap-12'>
        <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>Start The Game</h1>
        <p className='text-xl sm:text-2xl md:text-3xl text-center w-full mx-auto max-w-[800px] animate-bounce '>Select sport</p>
        <div className='grid grid-cols-2 gap-8'>
            <button onClick={() => handleSelection('football')} className='border-4 border-solid border-green-400 rounded-lg overflow-hidden duration-200 hover:opacity-60 cursor-pointer py-10 greenShadow '><span className={'text-xl sm:text-2xl md:text-4xl font-bold ' + fugaz.className}>FOOTBALL ⚽️</span></button>
            <button onClick={() => handleSelection('basket')} className='border-4 border-solid border-amber-600 rounded-lg overflow-hidden duration-200 hover:opacity-60 cursor-pointer orangeShadow'><span className={'text-xl sm:text-2xl md:text-4xl font-bold ' + fugaz.className}>BASKET 🏀</span></button>
        </div>
    </div>
  )
}
