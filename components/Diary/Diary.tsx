"use client";

import { useState } from "react";
import Image from "next/image";

export default function Diary() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="flex h-[70vh] w-[75vw] max-w-5xl overflow-hidden rounded-lg shadow-2xl">
          <div className="flex-1 bg-[#f5eddc] border-r border-gray-300" />
          <div className="flex-1 bg-[#f5eddc]" />
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
