import Rain from "./Rain";
export default function Window() {
  return (
    <div className="absolute left-1/2 top-0 h-[55vh] w-[70vw] max-w-5xl -translate-x-1/2">
      {/* Frame */}
      <div className="absolute inset-0 border-[14px] border-[#5A3A22]">
        {/* Glass */}
        <div className="absolute inset-[14px] overflow-hidden bg-[#0b1520]">
            {/* Vertical divider */}
        <div className="absolute left-1/2 top-[14px] bottom-[14px] w-[8px] -translate-x-1/2 bg-[#5A3A22] z-10" />

            {/* Horizontal divider */}
        <div className="absolute left-[14px] right-[14px] top-1/2 h-[8px] -translate-y-1/2 bg-[#5A3A22] z-10" />
      <Rain />
        </div>
      </div>
    </div>
  );
}