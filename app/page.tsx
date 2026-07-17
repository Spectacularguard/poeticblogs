import Rain from "../components/Scene/Rain";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0D]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0B0B0D] to-black" />

      {/* Rain */}
      <Rain />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#F6F1E7]">
            To Whoever Opens These Pages...
          </h1>

          <p className="mt-4 text-gray-400">
            May these words find you in a moment of peace and reflection...
          </p>
        </div>
      </div>
    </main>
  );
}
