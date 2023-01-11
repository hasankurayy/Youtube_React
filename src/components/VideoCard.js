import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoVideoTitle, demoVideoUrl } from '../utils/constant'

function VideoCard({ item }) {
    return (
        <Card sx={{ width: {xs: "100%" ,md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={item.id.videoId ? `/video/${item.id.videoId}` : demoVideoUrl}>
                <CardMedia image={item.snippet?.thumbnails?.high?.url} alt={item.snippet.title} sx={{width: 358, height:180}} />
            </Link>

            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
                <Link to={item.id.videoId ? `/video/${item.id.videoId}` : demoVideoUrl}> 
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {item?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>

                <Link to={item?.snippet?.channelId ? `/channel/${item.snippet.channelId}` : demoVideoUrl}> 
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {item?.snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0,60)}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard