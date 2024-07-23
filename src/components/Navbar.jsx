import React from 'react';
import { MdMenu } from 'react-icons/md';
import { GoVideo } from 'react-icons/go';
import SearchBar from './SearchBar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='grid grid-cols-6 p-4 sm:grid-cols-12 items-center justify-between bg-black m-0'>
      <div className='flex col-span-5 sm:col-span-4 gap-2 items-center'>
        <MdMenu className='size-8 min-w-8 text-white'/>
        {<GoVideo className='size-12 min-w-12 text-white fill-red-500'/>}
        <div className='font-bold'><span className='text-red-500 text-xl'>Vid</span><span className='text-xl text-white'>Tube</span></div>
      </div>
      <div className='flex items-center justify-center hidden sm:block sm:col-span-7 px-8 max-w-[500px]'>
      <SearchBar/>
      </div>
      <div className='flex col-span-1 items-center justify-end'>
        <FaUser className='size-8 min-w-8 text-white' />
      </div>
    </div>
  )
}

export default Navbar
