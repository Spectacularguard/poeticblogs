
import Desk from "./Desk";
import Window from "./Window";

export default function Scene() {
  return (
    <>
        {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0B0B0D] to-black" />

      {/* Window */}
      <Window />   
      

      {/* Desk */}  
      <Desk />

    </>
  );
}