import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import Divider from './components/Divider';

const App = () => {
  return (
    <div>
      <div><Navbar /></div>
      <Divider divWidth={'w-full'}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
