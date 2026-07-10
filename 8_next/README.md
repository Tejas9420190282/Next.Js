
1. What is a Dynamic Route?

A Dynamic Route is a route where part of the URL is dynamic (changes based on the requested value).

Instead of creating multiple pages like:
/product1
/product2
/product3
/product4


We create one page that handles all products.

Example URL
/products/1
/products/25
/products/100
/products/abc

All of these use the same page.



2. How to Create a Dynamic Route

Create a folder using square brackets.

app/

products/

[id]/

page.js

Here, [id] means id is a dynamic parameter.


URL Mapping
Folder                  URL
----------------------------------------
products/[id]/page.js   /products/1
products/[id]/page.js   /products/20
products/[id]/page.js   /products/999

Only the value changes.


3. How params Works

Next.js automatically sends the dynamic value through the params prop.

Example

export default function ProductPage({ params }) {
  return (
    <h1>{params.id}</h1>
  );
}


URL - /products/10

Output - 10



4. Understanding params

Suppose the URL is

/products/55

Next.js internally creates

params = {
    id: "55"
}

Your component receives

export default function ProductPage({ params }) {

console.log(params)

}

Output

{
   id: "55"
}