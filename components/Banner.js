"use client";
import { useState, useEffect } from "react";

export default function Banner() {
  const [activeGrid, setActiveGrid] = useState(1);

  const handleGridChange = (gridIndex) => {
    setActiveGrid(gridIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGrid((prevGrid) => {
        if (prevGrid === 5) {
          setTimeout(() => {
            setActiveGrid(1);
          }, 30000);
          return prevGrid;
        }
        return (prevGrid % 5) + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-[1200px]:mt-[60px] relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{ transform: `translateX(-${(activeGrid - 1) * 100}%)` }}
      >
        <div className="relative flex-shrink-0 w-full">
          <img
            src="/images/banner-1.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative flex-shrink-0 w-full">
          <img
            src="/images/banner-2.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative flex-shrink-0 w-full min-[1025px]:h-1/4">
          <img
            src="/images/banner-3.jpg"
            className="max-lg:absolute max-lg:inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative flex-shrink-0 w-full max-lg:aspect-w-2 max-lg:aspect-h-1">
          <img
            src="/images/banner-4.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative flex-shrink-0 w-full">
          {activeGrid === 5 && (
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/bYeuXxjyask?rel=0&controls=1&autoplay=1&mute=1&loop=1&vq=hd720&playsinline=1"
              title="FPT Smart Home - Hạnh Phúc Thật Giản Đơn | TVC 30s"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          )}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
        onClick={() => handleGridChange(activeGrid > 1 ? activeGrid - 1 : 5)}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="transform rotate-90"
        >
          <rect width="24" height="24" fill="none"></rect>
          <g>
            <rect width="24" height="24" fill="none"></rect>
            <g transform="translate(5 8.5)">
              <path
                d="M 14 0 L 7 7 L 0 0"
                fill="none"
                stroke="#E6E6E6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                strokeDasharray="0 0"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
        onClick={() => handleGridChange(activeGrid < 5 ? activeGrid + 1 : 1)}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="transform -rotate-90"
        >
          <rect width="24" height="24" fill="none"></rect>
          <g>
            <rect width="24" height="24" fill="none"></rect>
            <g transform="translate(5 8.5)">
              <path
                d="M 14 0 L 7 7 L 0 0"
                fill="none"
                stroke="#E6E6E6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                strokeDasharray="0 0"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
