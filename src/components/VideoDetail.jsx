import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const [videoData, setVideoData] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    fetchFromApi(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
    .then((data) => {
      setVideoData(data)
    })
  }, [id])

  return (
    <div>
      <div className='w-full h-full bg-cyan-100'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls/>
      </div>
    </div>
  )
}

export default VideoDetail
