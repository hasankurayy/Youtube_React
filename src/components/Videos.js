import { Stack, Box } from '@mui/material'
import React from 'react'

import VideoCard from './VideoCard'
import ChannelCard from "./ChannelCard"

function Videos({ videos, direction }) {

    if(!videos?.length) return "Loading..."

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={3}>
            
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard item={item} />}
                    {item.id.channelId && <ChannelCard item={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos