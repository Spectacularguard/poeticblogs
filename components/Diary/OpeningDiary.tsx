"use client";

import Image from "next/image";

type OpeningDiaryProps = {
  onAnimationEnd: () => void;
};

export default function OpeningDiary({
  onAnimationEnd,
}: OpeningDiaryProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="relative"
        style={{
          width: "600px",
          height: "420px",
          perspective: "1500px",
        }}
      >
        {/* Right Page */}
        <div className="absolute left-[300px] top-0 h-[420px] w-[300px] rounded-r-md border border-gray-300 bg-[#f5eddc] shadow-xl" />

        {/* Cover */}
        <div
          className="absolute left-0 top-0 origin-right animate-openCover"
          style={{
            transformStyle: "preserve-3d",
          }}
          onAnimationEnd={onAnimationEnd}
        >
          <Image
            src="/images/leather-cover.png"
            alt="Leather Cover"
            width={300}
            height={420}
            className="rounded-l-md shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}