import React, { useCallback, useRef, useState } from 'react';
import { MdCancel, MdOutlineSearch } from 'react-icons/md';

const SearchBar = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");

  const updateSearchText = useCallback ((e) => {
    setSearchText(e.target.value);
  }, [setSearchText])

  const clearSearch = () => {
    if(inputRef) {
      inputRef.value = '';
      setSearchText('');
    }
  }

  const searchVideo = () => {
    
  }

  return (
    <div className='px-4 py-2 flex border-2 rounded-3xl outline-gray-500 justify-between'>
      <input type='text' placeholder='Search' value={searchText} className='outline-none bg-black text-white' ref={inputRef} onChange={updateSearchText}/>
      <div className='flex items-center'>
        <MdCancel className='mr-2 size-6 min-h-6 text-white' onClick={clearSearch}/>
        <div className='mr-2 w-[2px] h-full bg-gray-500'></div>
        <MdOutlineSearch className='mr-2 size-6 min-h-6 text-white' onClick={searchVideo}/>
      </div>
    </div>
  )
}

export default SearchBar
