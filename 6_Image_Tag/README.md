Next.js Image Component (next/image) – Interview Notes

The Image component in Next.js is a replacement for the normal HTML <img> tag. It automatically optimizes images for better performance, faster loading, and improved SEO.

What is the Image Component?

The Image component is imported from next/image and provides built-in image optimization.

import Image from "next/image";

Basic Syntax
import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={300}
      height={200}
    />
  );
}
 ---------- Why use Image instead of <img>? -----------
1. HTML <img>	Next.js <Image>
2. Loads original image	Automatically optimizes images
3. No lazy loading by default	Lazy loading by default
4. No automatic resizing	Responsive resizing
5. No format conversion	Converts to modern formats like WebP/AVIF (when supported)
6. Can cause layout shift	Prevents layout shift by reserving space
7. Manual optimization	Automatic optimization

Advantages of Image
1. Automatic Image Optimization

Next.js compresses and serves optimized images.

Example:

Original image

5 MB

Optimized by Next.js

500 KB

2. Lazy Loading (Default)

Images load only when they enter the viewport.

<Image
  src="/banner.jpg"
  alt="Banner"
  width={800}
  height={400}
/>

This improves initial page load performance.

3. Prevents Layout Shift (CLS)

Because width and height are known, the browser reserves space before the image loads.

Without dimensions:

Text

(Image loads later)

Page jumps

With Image:

Reserved Space

Image

No page jump

4. Responsive Images

The Image component serves different image sizes depending on the user's device.

Example:

Mobile → 400px image
Tablet → 800px image
Desktop → 1200px image

This saves bandwidth and improves speed.

5. Better SEO

Search engines favor fast-loading pages. Optimized images contribute to better performance scores and user experience.

Common Props

 ------ src --------

Path or URL of the image.

src="/profile.jpg"

or

src="https://example.com/image.jpg"
alt

Alternative text for accessibility and SEO.

alt="Profile Picture"

 ---- width ---- 

Width of the image.

width={400}

 ---- height -----

Height of the image.

height={300}
 ---- priority ---- 

Loads the image immediately instead of lazy loading.

Use for:

Hero image
Logo above the fold
Landing page banner
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>

 ---- quality ---- 

Controls image quality (1–100).

<Image
  src="/photo.jpg"
  alt="Photo"
  width={500}
  height={400}
  quality={80}
/>

Default is usually 75.

 ---- sizes ---- 

Helps the browser choose the correct image size for different screen widths.

<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
/>

 ---- fill ---- 

Makes the image fill its parent container.

<div className="relative w-80 h-60">
  <Image
    src="/nature.jpg"
    alt="Nature"
    fill
  />
</div>

Important: The parent element must have position: relative and an explicit width and height.

Local Images

Store images inside the public folder.

public/
│
├── logo.png
├── profile.jpg
└── banner.webp

Use them like this:

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
/>
Remote Images

For external images, configure allowed domains in next.config.js.

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

Then:

<Image
  src="https://images.unsplash.com/photo-12345"
  alt="Nature"
  width={500}
  height={300}
/>
Responsive Image Example
<div className="relative w-full h-80">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    sizes="100vw"
  />
</div>
Using Tailwind CSS
<Image
  src="/profile.jpg"
  alt="Profile"
  width={200}
  height={200}
  className="rounded-full shadow-lg"
/>
  
Image vs img
Feature	<img>	<Image>
Optimization	❌	✅
Lazy Loading	❌ (unless specified)	✅
Responsive Images	❌	✅
Prevent Layout Shift	❌	✅
Better Performance	❌	✅
SEO Friendly	Basic	Better
Interview Questions & Answers
Q1. Why should we use the Image component instead of <img>?

Answer:

The Image component provides automatic image optimization, lazy loading, responsive image generation, layout shift prevention, and better performance compared to the standard HTML <img> tag.

Q2. What is lazy loading?

Answer:

Lazy loading delays loading an image until it is about to appear in the viewport. This reduces the initial page load time and improves performance.

Q3. What is the purpose of the priority prop?

Answer:

The priority prop disables lazy loading for an important image and tells Next.js to preload it. It should be used for above-the-fold images like hero banners or logos.

Q4. Why are width and height required?

Answer:

They allow the browser to reserve space before the image loads, preventing layout shifts (Cumulative Layout Shift or CLS) and improving user experience.

Q5. What is the fill prop?

Answer:

The fill prop makes the image fill its parent container. The parent must have position: relative and defined dimensions.

Q6. Can Image load images from external websites?

Answer:

Yes, but the external domain must be configured in next.config.js using remotePatterns (or domains in older versions).

Q7. Where should local images be stored?

Answer:

Local images should be stored inside the public folder and referenced with a root-relative path like /logo.png.

Interview Cheat Sheet
Topic	Key Point
Import	import Image from "next/image"
Purpose	Optimized image rendering
Local Images	Store in public/
Remote Images	Configure remotePatterns in next.config.js
priority	Preloads important images
fill	Makes image fill parent container
sizes	Helps browser choose the right image size
quality	Controls compression quality (1–100)
Default Loading	Lazy loading
Benefits	Faster loading, responsive images, reduced bandwidth, prevents layout shift, improved SEO
Interview Tip

A concise answer that interviewers often like is:

"The Image component from next/image is an optimized replacement for the HTML <img> tag. It automatically handles lazy loading, responsive image generation, image optimization, and layout stability, resulting in better performance, user experience, and SEO."
