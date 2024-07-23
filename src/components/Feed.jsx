import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Divider from './Divider'
import VideoPlayer from './VideoPlayer'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => { setVideos(data); setLoading(false);})
  }, [selectedCategory])
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div className='grid grid-cols-6 sm:grid-cols-12 '>
      <div className='col-span-6 sm:col-span-3 px-2 py-4'>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} propsStyle={''}/>
      </div>
      <div className='sm:flex col-span-6 sm:col-span-9 '>
        {/* <Divider propsStyle={'w-[4px] h-[100%] hidden sm:block'}/> */}
        <VideoPlayer videos={videos}/>
      </div>
    </div>
  )
}

export default Feed
