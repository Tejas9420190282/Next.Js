const user_Post_PostId_Page = async (props) => {
  const userInfo = await props.params;

  console.log(`userName : ${userInfo.username}`);

  console.log(`postId : ${userInfo.postid}`);
  

  return (
    <div>
      <p className="text-3xl font-bold text-red-500">
        UserName = {userInfo.username}
      </p>

      <p className="text-3xl font-bold text-red-500">
        postId = {userInfo.postid}
      </p>
    </div>
  );
};

export default user_Post_PostId_Page;