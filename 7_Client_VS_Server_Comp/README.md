1) The component is by default Server component in Next.js

2) we can't declair async function to main function in client component. (main function - component function)

3) Client comp is not safe for secreat url of data because it is visible in browser console section. for example we declaire URL key in client component, it will work properlly but it will visible in browser's console section. 
On the onther hand server component is safe to decair secreat key because it will not visible in browser's console section. (VIMP)

If we call any component in 'client component', it will make by default 'client' component.



-------------- GPT ------------------


1. What are Components in Next.js?

In Next.js App Router, there are two types of components:

    a. Server Components (Default)
    b. Client Components ("use client")

This is one of the most important Next.js interview topics.

2. Server Components
Definition

A Server Component is rendered on the server before being sent to the browser.

In Next.js App Router, every component is a Server Component by default.

No "use client" is needed.

Browser Request
       │
       ▼
Next.js Server
       │
       ▼
Server renders HTML
       │
       ▼
HTML sent to Browser
       │
       ▼
User sees page




Characteristics
Runs only on the server
Cannot use browser APIs
Cannot use React Hooks like useState
Can directly fetch data from databases
Faster initial page load
Better SEO
Smaller JavaScript bundle





        b. Client Components
Definition

A Client Component runs inside the browser.

To make a component a Client Component, add:

"use client"; at the very top.


How it works

Server
      │
      ▼
Sends JavaScript
      │
      ▼
Browser downloads JS
      │
      ▼
React becomes interactive


Characteristics
Runs in browser
Supports React Hooks
Supports event handlers
Supports browser APIs
Used for interactive UI
4. When to Use Client Component?

Whenever you need:

useState
useEffect
useReducer
useContext
onClick
onChange
onSubmit
window
document
localStorage
sessionStorage
Animation libraries
Third-party UI libraries requiring the DOM




5. Why Server Components?

Suppose your page only shows:

Product List
Blog
News
User Profile

No button.

No state.

No click.

Then why send unnecessary JavaScript?

Server Components avoid sending extra JavaScript to the browser, making pages faster.


6. Why Client Components?

Suppose you have:

Login Form

Typing

Button

Validation

Popup

These require JavaScript.

Therefore

Use Client Component.


7. Server vs Client Rendering

Server Component

Request
     ↓
Server
     ↓
HTML Generated
     ↓
Browser





Client Component

Request
     ↓
HTML + JS
     ↓
Browser Downloads JS
     ↓
React Hydrates
     ↓
Interactive Page



21. When Should You Use Each?

| Requirement          | Component |
| -------------------- | --------- |
| Static page          | Server    |
| Blog                 | Server    |
| Product list         | Server    |
| Database query       | Server    |
| Authentication check | Server    |
| Form                 | Client    |
| Button click         | Client    |
| Search box           | Client    |
| Modal                | Client    |
| Animation            | Client    |
| Theme switcher       | Client    |
| Counter              | Client    |
| Shopping cart UI     | Client    |



Server vs Client Comparison

| Feature               | Server Component              | Client Component            |
| --------------------- | ----------------------------- | --------------------------- |
| Default in App Router | ✅                             | ❌ (`"use client"` required) |
| Runs On               | Server                        | Browser                     |
| `useState`            | ❌                             | ✅                           |
| `useEffect`           | ❌                             | ✅                           |
| Event Handlers        | ❌                             | ✅                           |
| Browser APIs          | ❌                             | ✅                           |
| Database Access       | ✅                             | ❌                           |
| Server Secrets        | ✅                             | ❌                           |
| SEO                   | Excellent                     | Good                        |
| Initial Load          | Faster                        | Slower                      |
| JavaScript Sent       | Less                          | More                        |
| Best For              | Data fetching, rendering, SEO | Interactive UI              |




23. Interview Questions & Answers
Q1. What is a Server Component?

Answer:

A Server Component is rendered on the server before being sent to the browser. It is the default component type in the Next.js App Router and is ideal for data fetching, database access, and SEO.

Q2. What is a Client Component?

Answer:

A Client Component runs in the browser and supports interactivity such as state management, effects, event handlers, and browser APIs. It is created by adding "use client" at the top of the file.

Q3. When should you use a Client Component?

Answer:

Use a Client Component whenever you need React Hooks (useState, useEffect), event handlers (onClick, onChange), browser APIs (window, document, localStorage), animations, or interactive UI.

Q4. Can a Server Component use useState?

Answer:

No. Server Components cannot use client-side React Hooks like useState or useEffect.

Q5. Can a Server Component import a Client Component?

Answer:

Yes. A Server Component can render a Client Component as a child.

Q6. Can a Client Component import a Server Component?

Answer:

No. Client Components cannot directly import Server Components because Server Components execute on the server. Instead, pass data from the Server Component as props or use composition.

Q7. Why are Server Components faster?

Answer:

Server Components reduce the amount of JavaScript sent to the browser. They render on the server, resulting in faster page loads, improved performance, and better SEO.

Interview Cheat Sheet (Remember These)
✅ Default component = Server Component
✅ Add "use client" to make a Client Component
✅ Server Components = data fetching, database access, SEO
✅ Client Components = state, events, browser APIs, interactivity
✅ Server → Client import = Allowed
❌ Client → Server import = Not Allowed
❌ useState, useEffect, window, localStorage in Server Components = Not Allowed
Simple Rule to Remember

If the component only displays data or fetches it from the server, make it a Server Component. If the component needs user interaction, state, effects, or browser APIs, make it a Client Component by adding "use client" at the top.