const ServerComponent = async () => {
  const urlLink = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(urlLink);

  const data = await res.json();

  console.log("Fetched data:", data);

  return (
    <>
    <h1 className="text-2xl bg-red-500 text-white font-bold mb-4">Server Component</h1>
      <div className="mt-4 flex flex-col gap-10">
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id} className="border-b py-2">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ServerComponent;
