// location of user_UserName_Post_Postid_Page - @/app/user/[username]/post/[postid]/page.jsx
 

"use client"

import { use } from "react";


const user_UserName_Post_Postid_Page = (props) => {

    const userInfo = use(props.params);

    console.log(`userName : ${userInfo.username}`);
    
    console.log(`post_Id : ${userInfo.postid}`);
    
    return (
        <>
            <p className="text-red-500 text-4xl pt-5">userName : {userInfo.username}</p>

            <p className="text-red-500 text-4xl pt-5">user_Id : {userInfo.postid}</p>
        </>
    )
}

export default user_UserName_Post_Postid_Page;