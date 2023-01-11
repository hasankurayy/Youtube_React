import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import Videos from "./Videos"

function VideoDetail() {

    const [videoDetail, setVideoDetail] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((res) => setVideoDetail(res.items[0]))
        
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((res) => setRelatedVideos(res.items))
    }, [id])

    if(!videoDetail) return "Lodaing..."

    return (
        <Box minHeight="95vh" p={2}>
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player" 
                            controls/>

                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {videoDetail.snippet.title}
                        </Typography>

                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
                            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                                    {videoDetail.snippet.channelTitle}
                                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                </Typography>
                            </Link>

                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                                </Typography>

                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                                </Typography>

                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box px={2} py={{ md: 1, xs:5  }} justifyContent="center" alignItems="center">
                    <Videos videos={relatedVideos} direction="column"/>
                </Box>

            </Stack>
        </Box>
    )
}

export default VideoDetail