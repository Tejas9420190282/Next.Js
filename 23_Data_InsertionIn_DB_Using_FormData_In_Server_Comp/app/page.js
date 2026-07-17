
// page.js

import { action } from "./action";

function Home() {
  return (
    <>
      <form
        action={action}
        className="flex flex-col justify-center items-center gap-3 mt-15"
      >
        <div className="bg-white p-1 w-52 rounded">
          <input
            type="text"
            placeholder="Enter user's Name"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="name"
          />
        </div>

        <div className="bg-white p-1 w-52 rounded">
          <input
            type="number"
            placeholder="Enter user's STD"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="std"
          />
        </div>

        <div className="bg-white p-1 w-52 rounded">
          <input
            type="text"
            placeholder="Enter user's Skills"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="skills"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 p-2 rounded text-black font-bold"
        >
          Submit form
        </button>
      </form>
    </>
  );
}

export default Home;
