'use client';

import React, { useEffect, useState } from 'react';

export default function Index() {
  const [count, setCount] = useState<number>(0);
  const [mount, setMount] = useState<number>(1000);
  const [showAnimation, setShowAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleChange = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };
  const getLevelInfo = () => {
    switch (Math.floor(count / 100000)) {
      case 0:
        return { text: 'Bronze', number: 1 };
      case 1:
        return { text: 'Silver', number: 2 };
      case 2:
        return { text: 'Platinum', number: 3 };
      case 3:
        return { text: 'Diamond', number: 4 };
      case 4:
        return { text: 'Master', number: 5 };
      case 5:
        return { text: 'Grandmaster', number: 6 };
      case 6:
        return { text: 'Elite', number: 7 };
      case 7:
        return { text: 'Legendary', number: 8 };
      case 8:
        return { text: 'Mythic', number: 9 };
      default:
        return { text: 'Mythic', number: 9 };
    }
  };
  const handleIncrement = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
    if (!showAnimation) handleChange();
    //
  };

  useEffect(() => {}, []);
  return (
    <>
      <div>
        <style>
          {`
            .animation {
              opacity: 1;
              animation-name: example;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }

            @keyframes example {
              0%   {opacity: 1; left :${mousePosition.x + 'px'}; top:${
                mousePosition.y - 70 + 'px'
              };}
              100% {opacity: 0; left: ${mousePosition.x + 'px'}; top:${
                mousePosition.y - 150 + 'px'
              };}
            }
            `}
        </style>
      </div>
      <div className="relative rounded-t-3xl border-t-2 border-[rgb(243,186,47)] bg-[#1C1F24] px-5 shadow-km">
        <div className="grid grid-cols-3 gap-2 pt-5">
          <div className="rounded-2xl bg-[#272A2F] py-2 text-center text-xs font-medium">
            <div className="text-[#A0634B]">Earn per tap</div>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <img
                src="/images/dollar-icon.svg"
                alt="dollar"
                className="h-6 w-6"
              ></img>
              <div className="text-lg text-white">+1</div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#272A2F] py-2 text-center text-xs font-medium">
            <div className="text-[#4A4E90]">Coins to level up</div>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <div className="text-lg text-white">5k</div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#272A2F] py-2 text-center text-xs font-medium">
            <div className="text-[#A0634B]">Profit per hour</div>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <img
                src="/images/dollar-icon.svg"
                alt="dollar"
                className="h-6 w-6"
              ></img>
              <div className="text-lg text-white">20</div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center space-x-3">
          <img
            src="/images/dollar-icon.svg"
            alt="dollar"
            className="h-14 w-14"
          ></img>
          <div className="text-2xl font-semibold text-white">{count}</div>
        </div>
        <div className="mt-5 flex items-center text-white">
          <div className="text-xs font-semibold">
            {getLevelInfo().text} &gt;
          </div>
          <div className="ml-auto text-xs">
            <span className="mr-2 text-[#8B8E93]">Level</span>
            {getLevelInfo().number}/9
          </div>
        </div>
        <div className="relative z-0 mt-1 h-3 overflow-hidden rounded-full bg-[#FFFFFF] bg-opacity-15">
          <div
            className="h-full rounded-full opacity-100 transition-transform !duration-500"
            style={{
              transform: `translateX(-${100 - ((count % 100000) / 100000) * 100}%)`,
              background: '-webkit-linear-gradient(left, #0075FF, #86BEFF)',
            }}
          ></div>
        </div>
        <div
          className="group m-auto mt-5 flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full"
          onClick={handleIncrement}
        >
          <div
            className="h-[90%] w-[90%] rounded-full bg-cover transition duration-300 group-active:scale-105"
            style={{
              backgroundImage: 'url(/images/hamster.png)',
              backgroundRepeat: 'none',
            }}
          ></div>
          {/* <img src='/images/hamster.png' alt='hamster' className='w-[90%] h-[90%] rounded-full'></img> */}
          <div
            className={`animation text-lg font-medium text-white ${
              showAnimation ? '' : 'hidden'
            }`}
            style={{
              position: 'absolute',
              left: mousePosition.x + 'px',
              top: mousePosition.y + 'px',
            }}
          >
            +1
          </div>
        </div>
        <div className="mt-5 flex text-lg font-medium text-white">
          <div className="">⚡ {mount}/1000</div>
          <div className="ml-auto">🚀 Boost</div>
        </div>
      </div>
    </>
  );
}
