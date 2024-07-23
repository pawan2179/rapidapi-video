import React from 'react'
import Video from './Video'

const VideoPlayer = ({videos}) => {
  {videos.items.map((item) => console.log("Fetched videos", item))};
  return (
    <div className={'px-4 py-4 rounded-md grid grid-cols-6 sm:grid-cols-12 gap-2'}>
      {videos?.items.map((item) => (
        <div className={'col-span-6 md:col-span-4 gap-2'}>
          <Video video={item}/>
        </div>
      ))}
    </div>
  )
}

export default VideoPlayer
