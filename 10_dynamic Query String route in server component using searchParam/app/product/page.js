// location of product_Page - "@/app/product/page"

// url - http://localhost:3000/product?category=laptop&page=10&brand=samsung

export const product_Page = async (props) => {
  const searchParams = await props.searchParams;

  console.log(`category : ${searchParams.category}`);

  console.log(`page : ${searchParams.page}`);

  console.log(`brand : ${searchParams.brand}`);

  return (
    <div>
      <p>category : {searchParams.category}</p>

      <p>page : {searchParams.page}</p>

      <p>brand : {searchParams.brand}</p>
    </div>
  );
};

export default product_Page;
