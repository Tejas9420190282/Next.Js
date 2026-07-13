// location of user_Datafetch_Servercomp_Page - "@/app/user/datafetch/servercomp/page"

const user_Datafetch_Servercomp_Page = async (props) => {
  const searchParams = await props.searchParams;

  const userName = searchParams.name?.replaceAll('"', "").trim();

  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 5000);
  })

  if (!userName) {
    return (
      <>
        <div className="bg-blue-300 flex flex-col justify-center items-center mt-25 p-5">
          <h1 className="text-red-500 font-bold text-xl ">
            No username provided
          </h1>
          <p className="text-black mt-5 text-2xl ">
            Please add ?name=username to url
          </p>
        </div>
      </>
    );
  }

  const api = `https://api.genderize.io/?name=${userName}`;

  const res = await fetch(api);

  const data = await res.json();

  console.log(data);

  return (
    <>
      <h1>Data featching</h1>

      <div className="flex flex-col justify-center mx-auto my-[10%] items-center bg-white text-black w-120 h-48 gap-2 shadow-xl shadow-blue-100 shadow-current">
        <p>Name : {data.name}</p>
        <p>gender : {data.gender}</p>
        <p>probability : {data.probability}</p>
        <p>count : {data.count}</p>
      </div>
    </>
  );
};

export default user_Datafetch_Servercomp_Page;
