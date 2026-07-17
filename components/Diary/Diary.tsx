import Image from "next/image";

export default function Diary() {
  return (
    <div className="pointer-events-none absolute bottom-[12%] left-1/2 z-10 -translate-x-1/2">
      <Image
        src="/images/leather-cover.png"
        alt="Leather diary resting on the desk"
        width={210}
        height={330}
        preload
        className="h-auto w-[220px] sm:w-[280px] lg:w-[330px]"
      />
    </div>
  );
}
