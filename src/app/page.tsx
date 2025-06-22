'use client';
import Image from "next/image";
import { cn } from "../../lib/utils";
import { Cards } from "./component/cards";

export default function Home() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black pt-45">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="z-10 text-center md:text-left">
          <Image
            src="/photo.jpg"
            alt="File icon"
            width={300}
            height={200}
            className="w-48 h-48 rounded-full object-cover shadow-2xl mx-auto md:mx-0 "
          />
          <div className="mt-3 text-center">
            <p className="font-sans font-bold text-neutral-900">Felipe P Oliveira</p>
            <p className="font-sans text-neutral-900 mt-1">Desenvolvedor {"</>"}</p>
            <a
              href="https://api.whatsapp.com/send?phone=71991718773"
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block mt-2"
              target="_blank"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>{`Contato`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </a>
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
