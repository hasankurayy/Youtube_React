import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


function SearchFeed() {

    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&maxResults=50&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>

            <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Search Results for:  <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />

        </Box>
    )
}

export default SearchFeed