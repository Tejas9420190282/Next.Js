import mySqlPool from "@/config/db";

const Home = async () => {

    const [data] = await mySqlPool.query("SELECT * FROM students");

    console.log(data);
    

  return (
    <>
        <div className="">
            {data.map((e) => {
                return (
                    <>
                        <div key={e.id} className="flex flex-row gap-10">
                            <p>ID : {e.id}</p>
                            <p>Name : {e.name}</p>
                            <p>STD : {e.std}</p>
                            <p>Skills : {e.skills}</p>
                        </div>

                        <p className="m-5">---------------------</p>
                    </>
                )
            })}
        </div>
    </>
  );
}

export default Home;