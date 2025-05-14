'use client'
import { useState, useRef } from 'react';

const Wheel = () => {
  const wheelRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const randomDeg = Math.floor(Math.random() * 360) + 1800;
    const newRotation = rotation + randomDeg;

    setRotation(newRotation);

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
      wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
        <p className='text-xl sm:text-2xl md:text-3xl text-center w-full mx-auto max-w-[800px] pb-8'>Let the wheel make the call!</p>
        
        <p className='text-4xl md:text-5xl font-bold'>🔻</p>
      <div className="relative w-54 h-54 md:w-72 md:h-72">
        <div
          ref={wheelRef}
          className="absolute inset-0 rounded-full bg-[#242323] transition-transform"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom" style={{ transform: 'rotate(0deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">🏀</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom" style={{ transform: 'rotate(45deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3" >⚽️</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(90deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">🏀</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(135deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">⚽️</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(180deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">🏀</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(225deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">⚽️</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(270deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">🏀</span>
          </div>
          <div className="absolute w-[1px] h-27 md:h-36 bg-white top-0 left-1/2 transform -translate-x-1/2 origin-bottom"  style={{ transform: 'rotate(315deg)' }}>
            <span className="absolute text-4xl md:text-6xl py-3">⚽️</span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff4545] via-[#00ff99] to-[#006aff] animate-spin-slow opacity-50 blur-xl z-[-1]" />
      </div>

      <button
        onClick={spinWheel}
        className="mt-6 px-6 py-3 cursor-pointer flyingBtn"
      >
        Spin
      </button>
    </div>
  );
};

export default Wheel;
