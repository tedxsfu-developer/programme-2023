import Image from "next/image";
import { Inter } from "next/font/google";
import ProgramItem from "@/components/ProgramItem";
import program from "@/data/ProgramData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-3 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        {program.map((items, index) => (
          <ProgramItem
            key={index}
            time={items.time}
            desc={items.desc}
            guest={items.guest}
          />
        ))}
      </div>
    </main>
  );
}
