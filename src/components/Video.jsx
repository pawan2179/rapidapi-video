import React from 'react'
import { MdVerified } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Video = ({video}) => {
  return (
    <div>
      <div>
        <img src={`${video.snippet?.thumbnails?.high?.url}`} className='rounded-md'/>
        <div className='flex items-center mt-2'>
          <img src={'../../public/img.jpg'} className='w-10 h-10 rounded-full mr-4'/>
          <div>
            <h2 className='font-bold text-gray-100'>{video.snippet?.title || "[Title Missing]"}</h2>
            <Link to={`/channel/${video.snippet?.channelId}`}>
              <div className='flex items-center'>
                <h3 className='font-semibold text-gray-100'>{video.snippet?.channelTitle || "Batman"}</h3>
                <MdVerified className='size-3 ml-1 mt-1 text-gray-100'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
