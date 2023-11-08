import Image from "next/image";
import ProgramItem from "@/components/ProgramItem";
import program from "@/data/ProgramData";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helvetica/HelveticaNeue-Roman.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeue-Lt.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeue-Bd.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen justify-between p-3 text-white bg-black ${helvetica.className}`}
    >
      <div className="flex justify-between mb-28">
        {" "}
        <h1 className="text-heading text-left font-light">Program</h1>
        <h1 className="text-heading text-left font-light">11/11</h1>
      </div>

      <div className="z-10 max-w-5xl w-full text-body font-normal lg:flex">
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
