import Scene from "../components/Scene/Scene";
import Diary from "@/components/Diary/Diary";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0D]">

      
      <Scene />

      <Diary />
       <div className="relative z-20 flex min-h-screen items-center justify-center">
        {/* Future UI (title, buttons, etc.) */}
      </div>

      

      {/* Content */}
     {/* <div className="relative z-10 flex min-h-screen items-center justify-center">*
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#F6F1E7]">
            To Whoever Opens These Pages...
          </h1>

          <p className="mt-4 text-gray-400">
            May these words find you in a moment of peace and reflection...
          </p>
        </div>
      </div>*/}
    </main>
  );
}
