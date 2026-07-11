
// @/app/user/[username]/page.jsx
"use client"

import { use } from "react";

const user_UserName_Page = (props) => {

    const userInfo = use(props.params);

    console.log(`UserName : ${userInfo.username}`);
    

    return (
        <>
            <h1>userName : {userInfo.username}</h1>
        </>
    )
}

export default user_UserName_Page