// location of blog - "@/app/user/[...abc]/page"

import React from "react";

const blog = async (props) => {
  const { abc } = await props.params; // we have declair abc becausewe have a folder name [...abc]

    /* 
        url - http://localhost:3000/user/tejas/laptop/8gbram
    */

  console.log(abc);     //  ['tejas', 'laptop', '8gbram']

  return (
    <div>
      <h1>Blog</h1>
      
    </div>
  );
};

export default blog;
