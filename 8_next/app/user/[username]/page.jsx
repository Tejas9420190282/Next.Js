
import React from 'react'

const User_Username_Page = async (props) => {

    console.log(props)

    const user = await props.params

    console.log(`userName: ${user.username}`)

  return (
    <div><p className="text-3xl font-bold text-red-500">UserName = {user.username}</p></div>
  )
}


export default User_Username_Page