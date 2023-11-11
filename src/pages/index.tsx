import localFont from "next/font/local";
import { program, programAfternoon, lunch } from "@/data/ProgramData";
import Header from "@/components/layout/Header";
import LunchActivity from "@/components/LunchActivity";
import ProgramItem from "@/components/ProgramItem";
import Link from "next/link";
import Sponsors from "@/components/layout/Sponsors";
import Footer from "@/components/layout/Footer";

// const helvetica = localFont({
//   src: [
//     {
//       path: "../fonts/helvetica/HelveticaNeue-Lt.woff",
//       weight: "200",
//       style: "light",
//     },
//     {
//       path: "../fonts/helvetica/HelveticaNeue-Roman.woff",
//       weight: "300",
//       style: "normal",
//     },
//     // {
//     //   path: "../fonts/helvetica/HelveticaNeue-Md.woff",
//     //   weight: "400",
//     //   style: "medium",
//     // },
//     {
//       path: "../fonts/helvetica/HelveticaNeue-Bd.woff",
//       weight: "700",
//       style: "bold",
//     },
//   ],
// });

export default function Home() {
  return (
    <main className={`min-h-screen p-3 text-white bg-black`}>
      <Header />
      <div className="fixed bottom-6 right-0">
        <Link
          href="/faq"
          className="mb-0 mr-4 bg-white text-black px-2 py-2 rounded-md"
        >
          FAQ
        </Link>
      </div>

      <div>
        <h4 className="text-ted-grey pb-1.5">Morning Session</h4>
      </div>

      <div className="z-10 max-w-5xl w-full text-body font-normal">
        {/* -----Morning Session section----- */}

        <div className="pb-10">
          {program.map((items, index) => (
            <ProgramItem
              key={index}
              time={items.time}
              desc={items.desc}
              guest={items.guest}
              href={items.href}
            />
          ))}
        </div>
        {/* -----Lunch Activities section----- */}
        <div>
          <h4 className="text-ted-grey pb-1.5">Lunch</h4>
          <hr className=" border-ted-grey"></hr>
        </div>
        <div className="text-heading text-left font-light py-5">
          13:00 &ndash; 15:00
        </div>
        <div className="text-body pb-8">
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
            href={items.href}
          />
        ))}
      </div>
      <h4 className="tracking-normal normal-case text-ted-grey font-sm">
        *Schedule subject to change
      </h4>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </main>
  );
}
