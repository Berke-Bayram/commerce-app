"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../ui/footer';
import Search from '../ui/search-bar';

export default function Marketplace() {
  const [time, setTime] = useState("Now loading...");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main>
      <div className='min-h-screen flex flex-col'>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 m-5">
          <div className= "pt-5 pl-5 bg-blue-700 text-left rounded-l-lg">
            <Link
              href = "/"
              className='text-white text-4xl font-bold'
            >
            <span className='block text-green-400'>Next-</span>
            Commerce
            </Link>
          </div>
          <div className="col-span-2 bg-green-300 rounded py-8">
            <h1 className="block text-4xl font-bold text-center py-5 text-white">
              Welcome to Marketplace.
            </h1>
            <h2 className="flex justify-center text-2xl text-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline m-1 w-8 h-8">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
              </svg>
              {time}
            </h2>
          </div>
          <div className="bg-gray-400 rounded-r-lg pl-5 pt-5">
            <Link
              href = "/"
              className='text-white text-3xl font-bold'
              >
              Your Profile
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline mx-2 mb-1 w-8 h-8">
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-8">
          <div className="col-span-2 bg-red-300 ml-5">
            Marketplace content goes here.
          </div>
          <div className="bg-yellow-400 mr-5 p-2">
            Search bar goes here.
            <Search />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}