"use client";

import { useState } from "react";
import Image from "next/image";

export default function Diary() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="h-[75vh] w-[70vw] rounded-md bg-[#efe6d2] shadow-2xl">
          {/* PageFlip will go here next */}
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2 cursor-pointer"
    >
      <Image
        src="/images/leather-cover.png"
        alt="Leather diary"
        width={240}
        height={360}
        className="h-auto w-[240px] sm:w-[300px] lg:w-[180px]"
      />
    </button>
  );
}
