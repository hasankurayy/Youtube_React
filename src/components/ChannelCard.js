import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constant'

function ChannelCard({item}) {

    console.log(item)

    return (
        <Box sx={{ boxShadow: "none", borderRadius: "20px", width: "320px"}}>
            <Link to={`/channel/${item?.id?.channelId}`}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" ,textAlign: "center", color: "#fff" }}>
                    <img src={item?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt="" 
                        style={{ width: "180px", height: "180px", borderRadius: "50%", marginBottom: "5px", border: "1px solid #e3e3e3"}}/>

                    <Typography variant='h6'>
                        {item?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </CardContent>
            </Link>
        </Box>
  )
}

export default ChannelCard