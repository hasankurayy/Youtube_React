import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

function ChannelDetail() {

    const { id } = useParams()
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideos, setChannelVideos] = useState(null)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
            .then((res) => setChannelDetail(res?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&maxResults=100`)
            .then((res) => setChannelVideos(res?.items))
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>

                <div style={{
                    background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
                    zIndex: 10,
                    height: "300px"
                }}></div>

                <div style={{ display: "flex", justifyContent: "center", transform: "translateY(-50%)"}}>
                    <ChannelCard item={channelDetail} />
                </div>

            </Box>

            <Box display="flex" p={2} >
                <Box sx={{ mr: {sm: "100px", } }}>
                    <Videos videos={channelVideos} />
                </Box>
            </Box>
        </Box>
    )
}

export default ChannelDetail