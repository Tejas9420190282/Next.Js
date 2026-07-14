1) In Next, All the routes are Static by default.


2. Types of Rendering in Next.js

Next.js mainly supports:

Static Rendering
Dynamic Rendering
Next.js Rendering
        │
        ├── Static Rendering
        │
        └── Dynamic Rendering


3. What is Static Rendering?

Static Rendering means the page is generated before the user requests it.

The HTML is usually generated:

During the build process
During deployment
During revalidation

The generated result can be stored and reused for multiple users.

Build Time
    ↓
Next.js generates HTML
    ↓
HTML is cached
    ↓
User 1 → Same cached HTML
User 2 → Same cached HTML
User 3 → Same cached HTML

The page does not need to be generated separately for every request.


Simple Definition

Static Rendering means the page is generated in advance and the generated result is reused for multiple users.

4. Static Rendering Example
export default function AboutPage() {
  return (
    <div>
      <h1>About Our Company</h1>

      <p>
        We provide software development services.
      </p>
    </div>
  );
}

This page contains fixed content.

It does not use:

Cookies
Request headers
User-specific information
Request-time data

Therefore, Next.js can generate it statically.



5. How Static Rendering Works
Developer writes page
          ↓
Run npm run build
          ↓
Next.js generates page
          ↓
Generated output is cached
          ↓
User requests page
          ↓
Cached page is returned


The page does not need to be generated again for every user.



6. Advantages of Static Rendering

Static pages are usually:

Faster
Cacheable
Scalable
SEO-friendly
Less expensive for the server
Good for content shared by all users
Why Is Static Rendering Fast?

The HTML is already generated.

When the user sends a request:

User Request
      ↓
Cached HTML
      ↓
Browser


The server does not need to generate the complete page again.





7. When Should We Use Static Rendering?

Use Static Rendering when the content:

Is the same for every user
Does not depend on the current request
Changes rarely
Can be cached
Does not require user-specific data

Examples:

Home page
About page
Contact information page
Portfolio page
Blog posts
Documentation pages
Product catalog
Terms and conditions
Privacy policy





8. Static Rendering with Data Fetching

A page can fetch data and still be statically rendered.

Example:

export default async function ProductPage() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

Fetching data does not automatically mean the page is dynamic.

If Next.js can fetch the data in advance and cache the result, the page can still be static.



9. What is Dynamic Rendering?

Dynamic Rendering means the page is generated when the user sends a request.

The page may be rendered separately for each request.

User Request
      ↓
Next.js Server
      ↓
Reads current data
      ↓
Generates page
      ↓
Returns page to user



Simple Definition

Dynamic Rendering means the page is generated at request time because its content depends on current, request-specific, or user-specific information.

10. Dynamic Rendering Example

Suppose a dashboard displays the currently logged-in user's name.

import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return (
    <div>
      <h1>User Dashboard</h1>

      <p>Token: {token?.value}</p>
    </div>
  );
}

The cookie can be different for every user.

Therefore, Next.js cannot generate one common page and reuse it for everyone.

11. How Dynamic Rendering Works
User 1 Request
       ↓
Read User 1 data
       ↓
Generate User 1 page
       ↓
Return response


User 2 Request
       ↓
Read User 2 data
       ↓
Generate User 2 page
       ↓
Return response

The content may be different for every request.



12. When Should We Use Dynamic Rendering?

Use Dynamic Rendering when the page depends on:

Logged-in user information
Cookies
Request headers
Authentication
User sessions
Real-time information
Frequently changing information
Request-specific information
Personalized content

Examples:

User dashboard
Admin dashboard
User profile
Shopping cart
Account settings
Order history
Notifications
Banking dashboard
Trading dashboard

For example, your Forex trading platform may use Dynamic Rendering for:

User balance
Open trades
Margin information
Deposit history
Withdrawal history
KYC status

These values can be different for every user and can change frequently.



13. Static vs Dynamic Rendering


| Feature                | Static Rendering           | Dynamic Rendering                |
| ---------------------- | -------------------------- | -------------------------------- |
| Generated              | Before the request         | At request time                  |
| Common generation time | Build time or revalidation | Every request                    |
| Cached                 | Usually yes                | Depends on configuration         |
| Speed                  | Usually faster             | May require more server work     |
| Content                | Same/shared content        | Current or user-specific content |
| Server work            | Less                       | More                             |
| Scalability            | Very high                  | Requires more server resources   |
| SEO                    | Excellent                  | Excellent                        |
| User-specific data     | Not ideal                  | Suitable                         |
| Example                | About page                 | User dashboard                   |




14. Important Point: Server Component Does Not Mean Dynamic Rendering

Many beginners think:

Server Component = Dynamic Page

This is incorrect.

A Server Component can be:

Statically rendered
Dynamically rendered

Example:

export default function AboutPage() {
  return <h1>About Us</h1>;
}

This is a Server Component because Server Components are the default in the App Router.

However, it can still be statically rendered.

Remember
Server Component
       │
       ├── Can be Static
       │
       └── Can be Dynamic



Server/Client Components and Static/Dynamic Rendering are different concepts.



15. Client Component Does Not Automatically Mean Dynamic Rendering

Many developers also think:

"use client"
      ↓
Dynamic Rendering

This is also incorrect.

A Client Component can be included inside a statically generated page.

Example:

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}

The page can still have a statically generated initial response, and the counter becomes interactive after hydration.




16. Static/Dynamic Rendering vs Server/Client Components


| Concept           | Meaning                                                          |
| ----------------- | ---------------------------------------------------------------- |
| Server Component  | Where the component executes and what capabilities it has        |
| Client Component  | Component that supports state, events, effects, and browser APIs |
| Static Rendering  | When the route output is generated in advance                    |
| Dynamic Rendering | When the route output is generated at request time               |



17. What Makes a Page Dynamic?

A route commonly becomes dynamic when it uses request-time APIs such as:

cookies()
headers()

or other request-specific information.

Example:

import { cookies } from "next/headers";

export default async function ProfilePage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return (
    <h1>
      Token: {token?.value}
    </h1>
  );
}

Because cookies can be different for each request, the page is dynamically rendered.

18. Force a Page to Be Dynamic

We can explicitly make a page dynamic:

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <h1>
      Dashboard
    </h1>
  );
}

The configuration:

export const dynamic = "force-dynamic";

tells Next.js:

Render this route dynamically at request time.

19. Force a Page to Be Static

We can explicitly request static rendering:

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <h1>
      About Page
    </h1>
  );
}

This tells Next.js to statically render the route when possible.

20. Dynamic Rendering with fetch()

For data that should be fetched for every request:

export default async function ProductPage() {
  const response = await fetch(
    "https://api.example.com/products",
    {
      cache: "no-store",
    }
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

The important part is:

cache: "no-store"

It tells Next.js not to reuse a cached fetch response.

The exact caching and rendering behavior can depend on your Next.js version and route configuration, so verify the route using the production build output.

21. Static Data with Revalidation

Sometimes data changes, but we do not need fresh data for every request.

We can use revalidation:

export default async function ProductPage() {
  const response = await fetch(
    "https://api.example.com/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}
revalidate: 60

means the cached data can be refreshed after approximately 60 seconds.

This approach is commonly called:

ISR

or:

Incremental Static Regeneration
22. Static Rendering, Dynamic Rendering, and ISR
Static Rendering
       ↓
Generated in advance
       ↓
Reused from cache


Dynamic Rendering
       ↓
Generated at request time
       ↓
Can use request-specific data


ISR
       ↓
Static/cached page
       ↓
Regenerated after a revalidation period
23. How to Know Whether a Page Is Static or Dynamic

The most reliable beginner-friendly method is to run a production build.

Run:

npm run build

Next.js displays information about the routes.

Depending on your Next.js version, the output may look similar to:

Route (app)

○  /
○  /about
ƒ  /dashboard
●  /blog/[slug]

The symbols may vary slightly by Next.js version, so read the legend printed below the build table.

A common meaning is:

Symbol	Meaning
○	Static route
●	Statically generated route
ƒ	Dynamic/server-rendered route

Always check the legend generated by your installed Next.js version.

24. Example Build Output
Route (app)

○  /
○  /about
○  /contact
ƒ  /dashboard
ƒ  /profile

Meaning:

/          → Static

/about     → Static

/contact   → Static

/dashboard → Dynamic

/profile   → Dynamic
25. Steps to Check Static or Dynamic Rendering
Step 1: Stop the Development Server

In the terminal, press:

Ctrl + C
Step 2: Create the Production Build
npm run build
Step 3: Check the Route Table

Look for your route:

○ /about

This means the page is static according to the build legend.

If you see:

ƒ /dashboard

this means the route is dynamically rendered according to the build legend.

Step 4: Run the Production Application
npm run start

Open:

http://localhost:3000
26. Why Not Depend Only on npm run dev?

Development mode is optimized for:

Fast code updates
Debugging
Hot reload
Error reporting

It does not always represent production rendering and caching behavior.

Therefore, use:

npm run build

to understand how Next.js classifies routes for production.

27. Example: Static Page

File:

app/about/page.jsx

Code:

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>

      <p>
        We are a software development company.
      </p>
    </div>
  );
}

Build output may show:

○ /about

This means the route is statically rendered.

28. Example: Dynamic Page

File:

app/dashboard/page.jsx

Code:

import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Token: {token?.value}
      </p>
    </div>
  );
}

Build output may show:

ƒ /dashboard

The page depends on request-specific cookie information, so it is dynamically rendered.

29. Common Misunderstandings
Misunderstanding 1
Server Component = Dynamic

❌ Incorrect

A Server Component can be static or dynamic.

Misunderstanding 2
Client Component = Dynamic Rendering

❌ Incorrect

Client Components provide browser-side interactivity, but the route can still have a statically generated initial response.

Misunderstanding 3
Data fetching = Dynamic Rendering

❌ Not always

A page can fetch data and still be static or cached.

Misunderstanding 4
Dynamic Route = Dynamic Rendering

❌ Not necessarily

A route such as:

/blog/[slug]

is called a dynamic route because the URL contains a variable segment.

However, its pages can still be statically generated.

The word dynamic has different meanings here:

Term	Meaning
Dynamic Route	URL contains a variable segment
Dynamic Rendering	Page is generated at request time
30. Interview Questions and Answers
Q1. What is Static Rendering in Next.js?

Answer:

Static Rendering means the route output is generated in advance, usually during the build process or revalidation, and the generated result can be cached and reused for multiple users.

Q2. What is Dynamic Rendering in Next.js?

Answer:

Dynamic Rendering means the route is rendered at request time because it depends on current, user-specific, or request-specific information.

Q3. What is the main difference between Static and Dynamic Rendering?

Answer:

Static Rendering generates content in advance and reuses it, while Dynamic Rendering generates content when a request is received.

Q4. How can we check whether a route is static or dynamic?

Answer:

Run npm run build and check the route output and its legend. Static routes are commonly shown with static-generation symbols such as ○, while dynamically rendered routes are commonly shown with ƒ.

Q5. Does a Server Component always use Dynamic Rendering?

Answer:

No. Server Components can be statically or dynamically rendered. Server Component describes where the component executes, while Static or Dynamic Rendering describes when the route output is generated.

Q6. Does "use client" automatically make the page dynamically rendered?

Answer:

No. "use client" enables client-side features such as state, effects, event handlers, and browser APIs. It does not automatically make the route dynamically rendered.

Q7. Does a dynamic route always use Dynamic Rendering?

Answer:

No. A dynamic route refers to a variable URL segment such as [id]. It can still be statically generated when Next.js knows the route values in advance.

Q8. What can cause Dynamic Rendering?

Answer:

Request-specific APIs such as cookies and headers, user-specific information, uncached request-time data, or explicit dynamic route configuration can cause Dynamic Rendering.

Interview Cheat Sheet
Topic	Static Rendering	Dynamic Rendering
Generated	Before request	At request time
Cached/reused	Usually yes	Depends on configuration
Performance	Usually faster	More server work
User-specific content	Not suitable by itself	Suitable
Request data	Usually not required	Often required
Example	About page	User dashboard
Build output	Commonly ○	Commonly ƒ
Easy Rule to Remember
Same content for many users
            ↓
     Static Rendering
Content depends on the request or user
            ↓
     Dynamic Rendering
How to verify?
       ↓
npm run build
       ↓
Check route symbols and legend
Short Interview Answer

Static Rendering generates a page in advance and reuses the generated result, making it fast and cache-friendly. Dynamic Rendering generates a page at request time and is useful for personalized or request-specific content. To check whether a Next.js route is static or dynamic, run npm run build and inspect the route classification and legend in the build output.