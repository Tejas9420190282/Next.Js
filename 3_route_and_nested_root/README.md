


- Folder Structure

my-next-app/
│
├── app/
    ├── page.jsx    
    ├── layout.jsx   =============> This is root layout file of the hole project. When we write anything in this file, it will visible in all the project pages.
    ├── about/
    |       ├── page.jsx    =============> This code's result will visible on "http://localhost:3000/about" url.
    |       ├── layout.jsx   =============>  This is root layout file of "/about" route. When we write anything in this file, it will visible in "/about" url pages.
    ├── service/
    |       ├── page.jsx    =============> This code's result will visible on "http://localhost:3000/service" url.
    |       ├── layout.jsx   =============>  This is root layout file of "/layout" route. When we write anything in this file, it will visible in "/service" url pages.
    |       ├── info/
    |             ├── page.jsx    =============> This code's result will visible on "http://localhost:3000/service/info" url.
    |             ├── layout.jsx  =============>  This is root layout file of "/layout" route. When we write anything in this file, it will visible in "/service/info" url pages.