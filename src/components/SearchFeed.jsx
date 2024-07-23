import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import VideoPlayer from './VideoPlayer'

const SearchFeed = () => {
  const [videoData, setVideoData] = useState(null);
  const params = useParams();
  console.log("params: ", params);

  useEffect(() => {
    fetchFromApi(`search?q=${params.searchTerm}&part=snippet%2Cid&regionCode=IN&maxResults=100&order=date`)
    .then((data) => {
      setVideoData(data);
    })
  }, [params])
  return (
    <div className='w-full'>
      {videoData && <VideoPlayer videos={videoData}/>}
    </div>
  )
}

export default SearchFeed
