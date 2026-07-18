"use client";


import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

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
  <div className="flex h-full flex-col items-center justify-center">
    <h1 className="font-serif text-5xl text-[#4A3428]">
      My Diary
    </h1>

    <p className="mt-6 text-lg italic text-[#7A675A]">
      A collection of poems
    </p>
  </div>
</Page>


<Page>
  
  <h2 className="mb-8 text-center font-serif text-3xl">
    The Girl Who Loves Rain
  </h2>

  <p className="whitespace-pre-line text-lg leading-9">
    Your first poem goes here...
  </p>

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