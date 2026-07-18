"use client";


import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
/*import PoemPage from "./PoemPage";*/
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
      Whispers of the Heart 
    </h1>

    <p className="mt-6 text-lg italic text-[#7A675A]">
      A collection of poems
    </p>
  </div>
</Page>


<Page>
  <h2 className="mb-8 text-center font-serif text-2xl text-[#4A3428]">
    The Girl Who Loves Rain
  </h2>

  <div className="whitespace-pre-line text-lg leading-8 text-[#3F2D21]">
{`I see the cloudy sky,
feel the gusty wind through my eyes.
It looks so sad and lonely,
but I hear the thunder strike.

Feeling a little scared,
I see the raindrops dance.
I put my head out the window.
The raindrops kiss me on my cheeks
and soothe my enervated soul.

Stepping out,
the coldness in the air
feels like a warm embrace.

`}
  </div>
</Page>

<Page>
   <div className="whitespace-pre-line text-lg leading-8 text-[#3F2D21]">
    {`I look up at the sky,
open my mouth,
with my arms stretched wide.

It fills my little heart
with joy and happy thoughts.
I smile so widely,
with tears in my eyes.

The rain whispers
with a lightning strike,
"I love you."
I reply with all my heart,
"I love you too."
`}
   </div>
  
</Page>

<Page>
  <h2 className="mb-8 text-center font-serif text-2xl text-[#4A3428]">
    Insondable
  </h2>

  <div className="whitespace-pre-line text-lg leading-8 text-[#3F2D21]">
{`She is a girl with big eyes.
When I say it,
she is a girl with big, bright eyes.

The eyes that look so deep,
like sitting on a window seat,
staring through the abyss of the sea.

She shines to see
the beauty through her
to be seen.

When the sun shines on her window,
her eyes radiate the sea.

`}
  </div>
</Page>

<Page>
  <div className="whitespace-pre-line text-lg leading-8 text-[#3F2D21]">
{`For once,
you feel like diving into that sea
to see the beauty she sees.

Behold the tears,
for she isn't meant to weep.

She loves too much
and dives too deep.

She is meant to smile
through her eyes,
and tell you things
through her eyes.

She is just
a girl with big eyes.`}
  </div>
</Page>


<Page>
  <div className="flex h-full items-center justify-center text-black-400">
    with many more pages to come...
  </div>
</Page>

<Page>
  <div className="flex h-full items-center justify-center text-navyblue-400">
    by Buntea
    </div>
</Page>
    </HTMLFlipBook>
  );
}