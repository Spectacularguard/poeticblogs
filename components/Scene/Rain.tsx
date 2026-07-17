"use client";

const drops = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: `${(i * 100) / 120}%`,
  delay: `${(i % 10) * 0.2}s`,
  duration: `${0.8 + (i % 5) * 0.2}s`,
}));

export default function Rain() {
  return (
    <div
  className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  );
}