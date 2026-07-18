"use client";

import Image from "next/image";

type ClosedDiaryProps = {
  onOpen: () => void;
};

export default function ClosedDiary({ onOpen }: ClosedDiaryProps) {
  return (
    <button
      onClick={() => {
    console.log("Diary clicked");
     alert("Diary clicked");
     onOpen();
    }}
      className="absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2"
    >
      <Image
        src="/images/leather-cover.png"
        alt="Leather diary"
        width={240}
        height={360}
        loading="eager"
        className="h-auto w-[240px] sm:w-[300px] lg:w-[180px]"
      />
    </button>
  );
}