"use client";

import { useState } from "react";
import ClosedDiary from "./ClosedDiary";
import OpeningDiary from "./OpeningDiary";
import Book from "./Book";

export default function Diary() {
  const [stage, setStage] = useState<"closed" | "opening" | "book">("closed");

  if (stage === "opening") {
    return (
      <OpeningDiary
        onAnimationEnd={() => setStage("book")}
      />
    );
  }

  if (stage === "book") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <Book />
      </div>
    );
  }

  return (
    <ClosedDiary
      onOpen={() => setStage("opening")}
    />
  );
}