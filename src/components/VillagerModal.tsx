"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Villager } from "@/types/villager";

interface Props {
  villager: Villager | null;
  onClose: () => void;
}

export default function VillagerModal({ villager, onClose }: Props) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!villager) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-labelledby="villager-modal-title"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute inset-0 w-full h-full bg-transparent border-none outline-none cursor-default"
      />

      <section className="relative flex flex-col md:flex-row gap-6 bg-softMist rounded-3xl shadow-xl max-w-4xl w-full p-6 md:p-8 text-liberty animate-fadeIn">
        <span
          onClick={(e) => e.stopPropagation()}
          className="contents"
          aria-hidden="true"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-parrotPink hover:text-liberty text-3xl font-bold cursor-pointer"
          >
            ×
          </button>

          <div className="flex flex-col items-center md:w-1/2">
            <Image
              src={villager.image_url}
              alt={villager.name}
              width={150}
              height={150}
            />

            {villager.quote && (
              <p className="italic text-center text-parrotPink mt-4">
                "{villager.quote}"
              </p>
            )}
          </div>

          <div className="flex flex-col justify-center md:w-1/2 text-sm md:text-base space-y-2">
            <h2 className="text-3xl text-center font-bold text-liberty mb-10">
              {villager.name}
            </h2>

            <div className="flex items-center justify-center gap-10">
              <div className="[&_p_span]:font-semibold [&_p]:mb-1 whitespace-nowrap">
                <p>
                  <span>Personality:</span> {villager.personality}
                </p>
                <p>
                  <span>Species:</span> {villager.species}
                </p>
                <p>
                  <span>Gender:</span> {villager.gender}
                </p>
                <p>
                  <span>Debut:</span> {villager.debut}
                </p>
              </div>

              <div className="[&_p_span]:font-semibold [&_p]:mb-1 whitespace-nowrap">
                <p>
                  <span>Birthday:</span> {villager.birthday_month}{" "}
                  {villager.birthday_day}
                </p>
                <p>
                  <span>Zodiac:</span> {villager.sign}
                </p>
                <p>
                  <span>Clothing:</span> {villager.clothing}
                </p>
                <p>
                  <span>Phrase:</span> "{villager.phrase}""
                </p>
              </div>
            </div>
          </div>
        </span>
      </section>
    </div>
  );
}
