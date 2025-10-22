import type { Villager } from "@/types/villager";

export async function getVillagers(): Promise<Villager[]> {
  const apiKey = process.env.NEXT_PUBLIC_NOOK_KEY;

  if (!apiKey) {
    throw new Error("API key não configurada");
  }

  try {
    const res = await fetch(`https://api.nookipedia.com/villagers?game=nh`, {
      headers: {
        "X-API-KEY": apiKey,
        "Accept-Version": "1.0.0",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status} - ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    throw new Error(
      `Erro ao buscar villagers: ${error instanceof Error ? error.message : "Erro desconhecido"}`,
    );
  }
}
