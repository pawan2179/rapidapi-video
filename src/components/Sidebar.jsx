import React from 'react'
import { Link } from 'react-router-dom'
import Divider from './Divider'

const Sidebar = ({propsStyle = '', selectedCategory, setSelectedCategory}) => {
  const updateSelectedCategory = () => {
    
  }
  return (
    <div>
      <ul className={`flex justify-between sm:flex-col text-white text-md overflow-auto scroll scrollbar ${propsStyle}`}>
      {["ABCD", "ABCD", "ABCD", "ABCD", "ABCD", "ABCD", "ABCD", "ABCD", "ABCD", "ABCD"].map((ele) => (
        <div className='text-white text-sm bg-red-500 gap-8 rounded-md px-4 py-2 mx-4 my-2 sm:py-2 border-2 border-gray-100'>
          <Link onClick={updateSelectedCategory}>ABCDE</Link>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default Sidebar
