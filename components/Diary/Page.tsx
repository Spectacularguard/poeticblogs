import { forwardRef, ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = forwardRef<HTMLDivElement, PageProps>(({ children }, ref) => {
  return (
    <div
      className="
     h-full
    w-full
    bg-[#F8F2E7]
    border
    border-[#D8C8A8]
    shadow-inner
    p-12
    flex
    flex-col
    "
    >
      {children}
    </div>
  );
});

Page.displayName = "Page";

export default Page;