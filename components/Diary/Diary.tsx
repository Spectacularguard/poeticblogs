import Image from "next/image";

export default function Diary() {
  return (
    <div className="pointer-events-none absolute bottom-[4%] left-1/2 z-20 -translate-x-1/2">
    <Image
  src="/images/leather-cover.png"
  alt="Leather diary"
  width={240}
  height={360}
  className="h-auto w-[240px] sm:w-[240px] lg:w-[180px]"
/>

    </div>
  );
}
