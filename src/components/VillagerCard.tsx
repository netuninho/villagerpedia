"use client";

import Image from "next/image";
import type { Villager } from "@/types/villager";

interface Props {
  villager: Villager;
  onClick?: () => void;
}

export default function VillagerCard({ villager, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-softMist rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-parrotPink cursor-pointer"
    >
      <div className="mx-auto flex items-center justify-center mb-3 overflow-hidden">
        <Image
          src={villager.image_url}
          alt={villager.name}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      <h2 className="text-darkVanilla text-lg font-semibold">
        {villager.name}
      </h2>
      <p className="text-parrotPink text-sm">{villager.personality}</p>
    </button>
  );
}
