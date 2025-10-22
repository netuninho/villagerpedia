import Image from "next/image";
import type { Villager } from "@/types/villager";

interface Props {
  villager: Villager;
}

export default function VillagerCard({ villager }: Props) {
  return (
    <div
      className="bg-softMist cursor-pointer rounded-2xl p-4 text-center shadow-md hover:shadow-xl hover:scale-[1.05] duration-300 ease-in-out"
    >
      <div className="mx-auto mb-3 w-24 h-24 rounded-full">
        <Image
          src={villager.image_url}
          alt="villager.name"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      </div>

      <h2 className="text-darkVanilla text-lg font-semibold">{villager.name}</h2>
      <p className="text-parrotPink text-sm">{villager.personality}</p>
    </div>
  )
}
