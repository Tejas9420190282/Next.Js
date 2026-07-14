import mySqlPool from "@/config/db";

export default async function Home() {
  const [data] = await mySqlPool.query(`SELECT * FROM students`);

  console.log(data);

  return (
    <>
      <div>
        {data.map((e) => {
          return (<>
            <div>
              <p key={e.id}>ID : {e.id}</p>
              <p>Name : {e.name}</p>
              <p>Skils : {e.skils}</p>
              <p>STD : {e.std}</p>

              <p className="m-10">----------------------</p>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}
