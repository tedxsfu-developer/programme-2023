import Image from "next/image";
import ProgramItem from "@/components/ProgramItem";
import program from "@/data/ProgramData";
import LunchActivity from "@/components/LunchActivity";
import lunch from "@/data/LunchActivityData";
import localFont from "next/font/local";
import programAfternoon from "@/data/ProgramAfternoonData";
import ReturnButton from "@/components/ReturnButton";

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
      className={`min-h-screen p-3 text-white bg-black ${helvetica.className}`}
    >
      <div className="flex justify-between mb-28">
        {" "}
        <h1 className="text-heading text-left font-light">Program</h1>
        <h1 className="text-heading text-left font-light">11/11</h1>
      </div>
      <div>
        <h4 className="text-ted-grey pb-1.5">Morning Session</h4>
      </div>

      <div className="z-10 max-w-5xl w-full text-body font-normal lg:flex">
        <ReturnButton></ReturnButton>
        {/* -----Morning Session section----- */}
        <div className="pb-10">
          {program.map((items, index) => (
            <ProgramItem
              key={index}
              time={items.time}
              desc={items.desc}
              guest={items.guest}
            />
          ))}
        </div>
        {/* -----Lunch Activities section----- */}
        <div>
          <h4 className="text-ted-grey pb-1.5">Lunch</h4>
          <hr className=" border-ted-grey"></hr>
        </div>
        <div className="text-heading text-left font-light py-5">
          13:00 - 15:00
        </div>
        <div className="text-body font-normal pb-8">
          We’ve prepared a roster of activities for you during lunch hour to
          spend.
        </div>
      </div>
      <div>
        {lunch.map((items, index) => (
          <LunchActivity
            key={index}
            location={items.location}
            desc={items.desc}
          />
        ))}
      </div>
      {/* -----Afternoon Session section----- */}
      <div>
        <div>
          <h4 className="text-ted-grey pt-10 pb-1.5">Afternoon Session</h4>
        </div>
        {programAfternoon.map((items, index) => (
          <ProgramItem
            key={index}
            time={items.time}
            desc={items.desc}
            guest={items.guest}
          />
        ))}
      </div>
      {/* <div>
        <Honeyman></Honeyman>
      </div> */}
    </main>
  );
}
