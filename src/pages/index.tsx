import localFont from "next/font/local";
import { program, programAfternoon, lunch } from "@/data/ProgramData";
import Header from "@/components/layout/Header";
import LunchActivity from "@/components/LunchActivity";
import ProgramItem from "@/components/ProgramItem";
import Link from "next/link";
import Sponsors from "@/components/layout/Sponsors";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className={`min-h-screen p-3 text-white bg-black`}>
      <Header />
      {/* <Link href="/faq">FAQ</Link> */}

      <h2 className="text-ted-grey pb-1.5">Morning Session</h2>

      <section className="z-10 max-w-5xl w-full text-body font-normal">
        {/* -----Morning Session section----- */}

        <div className="pb-10">
          {program.map((items, index) => (
            <ProgramItem
              key={index}
              time={items.time}
              desc={items.desc}
              guest={items.guest}
              // href={items.href}
            />
          ))}
        </div>
      </section>
      {/* -----Lunch Activities section----- */}
      <section>
        <h4 className="text-ted-grey pb-1.5">Lunch</h4>
        <hr className=" border-ted-grey"></hr>
        <div className="text-heading text-left font-light py-5">
          13:00 &ndash; 15:00
        </div>
        <div className="text-body pb-8">
          We’ve prepared a roster of activities for you during lunch hour to
          spend.
        </div>
        {lunch.map((items, index) => (
          <LunchActivity
            key={index}
            location={items.location}
            desc={items.desc}
          />
        ))}
      </section>
      {/* -----Afternoon Session section----- */}
      <section>
        <h2 className="text-ted-grey text-md pt-10 pb-1.5">
          Afternoon Session
        </h2>
        {programAfternoon.map((items, index) => (
          <ProgramItem
            key={index}
            time={items.time}
            desc={items.desc}
            guest={items.guest}
          />
        ))}
      </section>
      <h4 className="tracking-normal normal-case text-ted-grey font-sm">
        *Schedule subject to change
      </h4>
      {/* <Sponsors></Sponsors> */}
      {/* <Footer></Footer> */}
    </main>
  );
}
