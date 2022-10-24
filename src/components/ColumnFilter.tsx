import React from 'react'

export default function ColumnFilter({ column }) {
    const {filterValue, setFilter} = column;
    return (
        <div className="flex flex-col md:py-0 py-4">
          <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} placeholder="Search" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-40 h-8 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" />
        </div>
    )
}
