import { Box } from "@mui/material";
import React from "react";
import NotificationItem from "../Components/Notification/NotificationItem";
const Notification = () => {
    return(
        <Box style={{marginLeft : "60px"}}>
            <h1 style={{fontSize : "60px",marginBottom : "0px"}}>Notifications</h1>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>

        </Box>

    )
}
export default Notification