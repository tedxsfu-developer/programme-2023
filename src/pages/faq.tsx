import Header from "@/components/layout/Header";
import Link from "next/link";
import localFont from "next/font/local";
import Collapsible from "react-collapsible";
import ReturnButton from "@/components/button/ReturnButton";
import { useState } from "react";

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
          <Collapsible
            trigger="Where is The Centre for Performing Arts located?"
            easing="step-end"
            className="pb-2 border-b font-normal text-body"
          >
            <p>
              The Centre for Performing Arts is situated at 777 Homer St,
              Downtown Vancouver, BC making it easily accessible in the heart of
              the city.
              <br></br>
              <strong>From Waterfront Station:</strong>
              <br></br>
              The Centre is a short 13-minute walk from Waterfront station. The
              Centre also has accessible express service via Translink bus
              routes 007, 010, 014, 016, 050 or the Canada Line Skytrain.
              <br></br>
              The venue can be accessed via doors on Homer St. in front of the
              Vancouver Public Library: The Centre For Performing Arts.
              <br></br>
              The majority of our event takes place on the second floor of the
              Centre, with access to the theatre via the third floor as well.
            </p>
          </Collapsible>
        </div>
        <div className="py-1">
          <Collapsible
            trigger="Is there parking available at the venue?"
            easing="step-end"
            className="font-normal text-body pb-2 border-b"
          >
            <p>
              Limited parking is available near The Centre for Performing Arts.
              We recommend using public transportation, rideshare services, or
              carpooling!
              <br></br>Parking is available at: <br></br>
              {/* <ul>
                <li>L'Hermitage (Impark Lot #2263)</li>
                <li>Telus Garden (Advanced Parking Lot #9160)</li>
              </ul> */}
            </p>
          </Collapsible>
        </div>
      </div>
    </main>
  );
}
