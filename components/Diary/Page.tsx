import { forwardRef, ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = forwardRef<HTMLDivElement, PageProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col justify-center bg-[#f8f2e6] border border-[#d6c8aa] p-10 text-[#3b2f2f]"
    >
      {children}
    </div>
  );
});

Page.displayName = "Page";

export default Page;