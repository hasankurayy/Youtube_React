import React from 'react'

import { Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { logo } from "../utils/constant"
import SearchBar from './SearchBar'

function Navbar() {
    return (
        <Stack direction="row" alignItems="center" p={2}
            sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>

            <div className="logo-mine">
                <a href="/">HKRY</a>
            </div>

            <div style={{display: "flex"}}>
                <NavLink to="/" style={{ display: "flex", alignItems: "center", marginRight: "10px"}} >
                    <img src={logo} alt="" height={45}/>
                </NavLink>

                <SearchBar />
            </div>


        </Stack>
    )
}

export default Navbar