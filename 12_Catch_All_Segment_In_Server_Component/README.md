


1. What is a Catch-All Segment?

A Catch-All Segment in Next.js is used to capture multiple dynamic values from a URL path using a single dynamic route folder.

A Catch-All Segment is created by adding three dots (...) inside square brackets ([]).

Syntax:

[...folderName]

Example:

[...abc]

The three dots mean:

Capture all the remaining URL path segments.

2. Your Folder Structure

Your folder structure is:

app/

│

└── user/

    │

    └── [...abc]/

        │

        └── page.jsx


        Location:

@/app/user/[...abc]/page.jsx

Here:

user

is a static route segment.

Location:

@/app/user/[...abc]/page.jsx

Here:

user

is a static route segment.


3. Example URL
http://localhost:3000/user/tejas/laptop/8gbram

URL breakdown:

http://localhost:3000

/user

/tejas

/laptop

/8gbram


| URL Part  | Type                 |
| --------- | -------------------- |
| `/user`   | Static route         |
| `/tejas`  | First dynamic value  |
| `/laptop` | Second dynamic value |
| `/8gbram` | Third dynamic value  |



The Catch-All Segment:

[...abc]

captures:

tejas

laptop

8gbram



Next.js stores these values in an array:

["tejas", "laptop", "8gbram"]



6. Why Do We Use abc?

Your dynamic folder name is:

[...abc]

Therefore, Next.js creates a property named:

abc

inside the params object.

That is why you write:

const { abc } = await props.params;

The parameter name must match the folder name.

Folder Name
[...abc]

Correct:

const { abc } = await props.params;

Incorrect:

const { slug } = await props.params;

Incorrect:

const { id } = await props.params;

Because your folder is named:

[...abc]


not:

[...slug]

or:

[...id]
7. Folder Name Determines the Property Name

If the folder is:

[...abc]

use:
const { abc } = await props.params;

If the folder is:

[...slug]

use:

const { slug } = await props.params;

If the folder is:

[...details]

use:
const { details } = await props.params;

If the folder is:

[...path]

use:

const { path } = await props.params;