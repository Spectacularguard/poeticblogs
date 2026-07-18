"use client";


import HTMLFlipBook from "react-pageflip";
import { forwardRef } from "react";

const Page = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; pageNumber?: number }
>(({ children }, ref) => (
  <div
    ref={ref}
    className="flex h-full w-full items-center justify-center bg-[#f5eddc] text-black"
  >
    {children}
  </div>
));

Page.displayName = "Page";

export default function Book() {
  return (
    <HTMLFlipBook
      width={400}
      height={550}
      /*size="stretch"
      minWidth={300}
      maxWidth={500}
      minHeight={420}
      maxHeight={700}*/
      showCover
      mobileScrollSupport
    >
    
<Page>
  {""}
</Page>

<Page>
    {""}
</Page>

<Page>
  <div className="flex h-full items-center justify-center">
    <h1 className="text-5xl font-serif">My Diary</h1>
  </div>
</Page>

<Page>
  Poem 1
</Page>

<Page>
  Poem 2
</Page>

<Page>
  <div className="flex h-full items-center justify-center text-gray-400">
    with many more pages to come...
  </div>
</Page>

<Page>
  Back Leather Cover
</Page>
    </HTMLFlipBook>
  );
}