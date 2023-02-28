import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
  const[city, setCity] = useState("")
  
  const handleSearchClick = () => {
    if(city !== '') setQuery({q:city})
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type='text' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' placeholder='Search City...'/>
            <UilSearch size={25} className='text-white cursor-pointer' onClick={handleSearchClick} />
        </div>
    </div>
  )
}

export default Inputs