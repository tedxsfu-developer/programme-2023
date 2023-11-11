import Header from "@/components/layout/Header";
import Link from "next/link";
import localFont from "next/font/local";
import ReturnButton from "@/components/button/ReturnButton";
import { useState } from "react";
import Collapsible from "@/components/Collapsible";

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helvetica/HelveticaNeue-Lt.woff",
      weight: "200",
      style: "light",
    },
    {
      path: "../fonts/helvetica/HelveticaNeue-Roman.woff",
      weight: "300",
      style: "normal",
    },
    // {
    //   path: "../fonts/helvetica/HelveticaNeue-Md.woff",
    //   weight: "400",
    //   style: "medium",
    // },
    {
      path: "../fonts/helvetica/HelveticaNeue-Bd.woff",
      weight: "700",
      style: "bold",
    },
  ],
});
interface IProps {
  open?: boolean;
  title: string;
}
export default function FAQ() {
  //   const [isOpen, setIsOpen] = useState(open);

  return (
    <main
      className={`min-h-screen p-3 text-white bg-black ${helvetica.className}`}
    >
      <Header />

      <ReturnButton></ReturnButton>
      <div>
        <div className="py-1">
          <Collapsible trigger="Can I bring food and drinks into the venue?">
            <p>
              Outside food and drinks are not allowed. However, refreshments
              will be available.
            </p>
          </Collapsible>
        </div>
        <div className="py-1">
          <Collapsible trigger="Is there an intermission during the conference?">
            <p>
              Yes, there will be a designated intermission for you to stretch
              your legs and network with fellow attendees.
            </p>
          </Collapsible>
        </div>
        <div className="py-1">
          <Collapsible trigger="Are photography and recording allowed during the talks?">
            <p>
              Photography and recording are not allowed during the
              speakers&apos;talks. However, official event photographers will
              capture key moments.
            </p>
          </Collapsible>
        </div>
        <div className="py-1">
          <Collapsible trigger="Is there a coat check available at the venue?">
            <p>
              Coat check service will not be available. Please have all your
              belongings with you.
            </p>
          </Collapsible>
        </div>
        <div className="py-1">
          <Collapsible trigger="Is there parking available at the venue?">
            <p>
              Limited parking is available near The Centre for Performing Arts.
              We recommend using public transportation, rideshare services, or
              carpooling!
              <br></br>Parking is available at: <br></br>
              <ul>
                <li>L&apos;Hermitage (Impark Lot #2263)</li>
                <li>Telus Garden (Advanced Parking Lot #9160)</li>
              </ul>
            </p>
          </Collapsible>
        </div>
      </div>
    </main>
  );
}
