import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

const ChannelDetail = () => {
  const [channelData, setChannelData] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);

  const params = useParams();
  { console.log(params)}
  useEffect(() => {
    fetchFromApi(`channels?part=snippet%2Cstatistics&id=${params.id}`)
    .then((data) => {
      setChannelData(data);
      console.log('channel data : ', data);
    })
  }, [params])

  useEffect(() => {
    if(channelData) {
    fetchFromApi(`search?channelId=${params.id}&part=snippet%2Cid&order=date&maxResults=50`)
    .then((data) => {
      setChannelVideos(data);
      // console.log("Channel id: ", channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads)
      console.log("channel videos fetched : ", data);
    })
    }
  }, [channelData])
  return (
    <div className=''>
      { channelData && <div className='text-gray-300 flex flex-col items-center justify-center mt-8'>
        <img src={`${channelData.items[0]?.brandingSettings?.image?.bannerExternalUrl}`} className='h-40 w-40 rounded-full'/>
        <div className='flex flex-col items-center justify-center p-16 pt-8'>
          <h1 className='font-bold text-xl leading-10'>{`${channelData.items[0]?.snippet?.localized?.title}`}</h1>
          <h2 className='leading-6'>{`${channelData.items[0]?.snippet?.localized?.description}`}</h2>
          <div className='flex flex-col leading-5 justify-center items-center'>
            <h3>{`${channelData.items[0]?.statistics?.subscriberCount} Subscribers | `}</h3>
            <h3>{`${channelData.items[0]?.statistics?.videoCount} Videos | `}</h3>
            <h3>{`${channelData.items[0]?.statistics?.viewCount} Views`}</h3>
          </div>
        </div>
      </div>}
      <div>
        {channelVideos && <VideoPlayer videos={channelVideos} />}
      </div>
    </div>
  )
}

export default ChannelDetail
