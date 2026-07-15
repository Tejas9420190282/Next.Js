// StudentsList.js
import get_All_Student from "./get_All_Student";

const StudentsList = async ({ students }) => {
  
    const data = await get_All_Student();

  return (
    <>
      <div>
        {data.map((e) => {
          return (
            <>
              <div className="ml-5">
                <p key={e.id}>ID : {e.id}</p>
                <p>Name : {e.name}</p>
                <p>Skills : {e.skills}</p>
                <p>STD : {e.std}</p>
                <p className="m-5">---------------</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default StudentsList;
