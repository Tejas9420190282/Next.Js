"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [joke, setJoke] = useState({});
  const [showJoke, setShowJoke] = useState(true);

  const api = "https://official-joke-api.appspot.com/jokes/random";

  const createRandomJoke = async () => {
    try {
      const res = await fetch(api);

      const data = await res.json();

      console.log(data);

      setJoke(data);
    } catch (error) {
      console.log(`Errorr : ${error.message}`);
    }
  };

  useEffect(() => {
    createRandomJoke();
  }, []);

  return (
    <>
      <div>
        <p>setup : {joke.setup}</p>
        

        {
            showJoke ? (
                <>
                    <button onClick={() => setShowJoke(false)}>Revel</button>    
                </>
            ) : (
                <>
                    <p>punchline : {joke.punchline}</p>
                    <button onClick={() => setShowJoke(true)}>Hide</button>
                </>
            )
        }
      </div>

      <button onClick={createRandomJoke}>Next</button>
    </>
  );
};

export default Page;
