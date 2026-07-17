import Rain from "./Rain";
import Desk from "./Desk";

export default function Scene() {
  return (
    <>
        {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0B0B0D] to-black" />

      {/* Desk */}  
      <Desk />
      
      
      {/* Rain */}
      <Rain />

    </>
  );
}