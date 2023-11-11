import { program, programAfternoon, lunch } from "@/data/ProgramData";
import Header from "@/components/layout/Header";
import LunchActivity from "@/components/LunchActivity";
import ProgramItem from "@/components/ProgramItem";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          TEDxSFU | Canada&apos;s largest TEDx event | Vancouver, BC
        </title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta
          name="description"
          content="Enjoy a full day of discovery through this year's program &mdash; from 8 carefully curated speakers among Olympians, leaders in Silicon Valley, and "
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          property="og:title"
          content="TEDxSFU | Canada's largest TEDx event | Vancouver, BC"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Every year, TEDxSFU conferences provide a platform for industry professionals, advocates, educators, and storytellers to showcase their ideas worth spreading. TEDxSFU continues to engage over 2,500 members in the Metro Vancouver area annually through community members conferences, dialogue sessions, and after-party events. We're excited to gather a community of supporters who share similar desires to build community and spaces for storytelling, dialogue, and exploration of today's most intriguing and pressing topics."
          key="ogdesc"
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://tedxsfu.com/opengraph-image.png"
        />
        <meta
          property="twitter:url"
          content="https://tedxsfu.com/opengraph-image.png"
        />
        <meta
          name="twitter:title"
          content="TEDxSFU | Canada's largest TEDx event | Vancouver, BC"
        />
        <meta
          name="twitter:description"
          content="Every year, TEDxSFU conferences provide a platform for industry professionals, advocates, educators, and storytellers to showcase their ideas worth spreading. TEDxSFU continues to engage over 2,500 members in the Metro Vancouver area annually through community members conferences, dialogue sessions, and after-party events. We're excited to gather a community of supporters who share similar desires to build community and spaces for storytelling, dialogue, and exploration of today's most intriguing and pressing topics."
        />
        <meta name="twitter:image" content="/opengraph-image.png" />
      </Head>
      <main className={`min-h-screen p-3 text-white bg-black`}>
        <Header />
        {/* <Link href="/faq">FAQ</Link> */}

        <h2 className="text-ted-grey pb-1.5">Morning Session</h2>

        <section className="z-10 w-full text-body font-normal">
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
            We’ve prepared a whole list of activities for you during lunch hour
            to spend with friends, both new and old!
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
        {/* <Sponsors></Sponsors> */}
        {/* <Footer></Footer> */}
      </main>
    </>
  );
}
