import { HoverEffect } from "./ui/card-hover-effect";

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "FPOWEB",
    description:
      "Desenolvimento de sites, landing pages, apps e etc..",
    link: "https://fpoweb.com.br/",
    img: "/fpoweb.jpg"
  },
  {
    title: "League of Consult",
    description:
      "Aplicativo para consultar perfil do jogo league of legends, com histórico das últimas partidas, gráficos da partida, partidas ao vivo.",
    link: "https://play.google.com/store/apps/details?id=com.loc.loc",
    img: "/loc.webp"
  },
  {
    title: "Treino Easy",
    description:
      "Aplicativo para pessoas que buscam simplicidade e eficiência, o app permite que você crie rotinas semanais de treino, cadastre os exercícios de cada dia",
    link: "https://play.google.com/store/apps/details?id=com.treinofacil.fpo",
    img: "/treinoeasy.png"
  },
];
