import React from 'react'

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute text-white flex items-center px-4 border-r h-full bg-indigo-700 rounded-l cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <input value={filter || ''} onChange={e => setFilter(e.target.value)} className="text-center text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="Search" />
        </div>
      </div>
    </>
  )
}
