

1. What is searchParams?

searchParams is a special prop provided by Next.js that contains the query string parameters from the URL.

http://localhost:3000/product?category=laptop&page=10&brand=samsung

The query string is everything after the ?.

?category=laptop&page=10&brand=samsung

Next.js converts it into an object.

{
  category: "laptop",
  page: "10",
  brand: "samsung"
}


2. What are Query Parameters?

Query parameters are key-value pairs added after the ? in a URL.

General syntax:

URL?key=value&key=value

Example:

/product?category=laptop&page=10&brand=samsung


| Query Parameter | Value   |
| --------------- | ------- |
| category        | laptop  |
| page            | 10      |
| brand           | samsung |


5. Your Example Explained
export default async function ProductPage(props) {

    const searchParams = await props.searchParams;

    console.log(searchParams);

    return (
        <div>

            <p>{searchParams.category}</p>

            <p>{searchParams.page}</p>

            <p>{searchParams.brand}</p>

        </div>
    );
}

URL

http://localhost:3000/product?category=laptop&page=10&brand=samsung

Output

laptop

10

samsung

Console

{
   category: "laptop",
   page: "10",
   brand: "samsung"
}