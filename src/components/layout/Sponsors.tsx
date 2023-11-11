import Image from "next/image";
import { sponsors } from "@/data/Sponsors";

interface Props {
  // src: string;
  // alt: string;
}

export default function Sponsors(items: Props) {
  return (
    <>
      <div className="pt-24 text-name mb-8">
        Give a round of applause to our partners
      </div>
      <div className="grid grid-cols-3 pb-24 gap-4 items-center">
        {sponsors.map((e, index) => (
          <div
            className={`justify-self-center my-2 p-4 ${
              index === sponsors.length - 1 && "col-span-3"
            }`}
          >
            <Image src={e.src} alt={e.alt} width={100} height={100}></Image>
          </div>
        ))}
      </div>
    </>

    // <div>
    //   {/* <div className="pt-5"></div> */}
    //   <div className="grid grid-cols-3 items-center p-5">
    //     <Image
    //       src="/logo/deltahotels-logo.png"
    //       width={57.46}
    //       alt="Delta Hotels"
    //       className="justify-self-center my-2"
    //     ></Image>
    //     <Image
    //       src="/logo/ticketmaster-logo.png"
    //       width={48}
    //       height={48}
    //       alt="Ticketmaster"
    //       className="justify-self-center my-2"
    //     ></Image>
    //     <Image
    //       src="/logo/honourhouse-logo.png"
    //       width={52}
    //       height={50}
    //       alt="Honour House Society"
    //       className="justify-self-center my-2"
    //     ></Image>
    //     <Image
    //       src="/logo/sfu-logo.png"
    //       width={113}
    //       height={50}
    //       alt="SFU People, Equity & Inclusion"
    //       className="justify-self-center "
    //     ></Image>
    //     <Image
    //       src="/logo/gulffraser-logo.png"
    //       width={78}
    //       height={40.96}
    //       alt="Gulf & Fraser"
    //       className="justify-self-center my-2"
    //     ></Image>

    //     <Image
    //       src="/logo/fantuan-logo.png"
    //       width={111}
    //       height={38}
    //       alt="Fantuan"
    //       className="scale-105 justify-self-center my-2"
    //     ></Image>
    //     <Image
    //       src="/logo/tedxsurrey-logo.png"
    //       width={112}
    //       height={28}
    //       alt="TEDxSurrey"
    //       className="justify-self-center my-2"
    //     ></Image>
    //     <Image
    //       src="/logo/prado-logo.png"
    //       width={60.94}
    //       height={39}
    //       alt="Prado Cafe"
    //       className="justify-self-center mt-2 mb-4"
    //     ></Image>
    //     <Image
    //       src="/logo/artvancouver-logo.png"
    //       width={97.42}
    //       height={9.2}
    //       alt="Art Vancouver"
    //       className="justify-self-center my-2"
    //     ></Image>
    //   </div>
    //   <div className="grid grid-cols-2 items-center pb-5">
    //     <Image
    //       src="/logo/paragontea-logo.png"
    //       width={97}
    //       height={97}
    //       alt="Paragon Tea"
    //       className="scale-80 justify-self-center"
    //     ></Image>
    //     <Image
    //       src="/logo/youthfulcities-logo.png"
    //       width={82}
    //       height={30}
    //       alt="Youthful Cities"
    //       className="scale-80 justify-self-center"
    //     ></Image>
    //   </div>
    //   <div>
    //     <h4 className="flex-wrap uppercase text-white font-sm text-center">
    //       Thank you to
    //       <br></br>our sponsors and partners
    //     </h4>
    //   </div>
    // </div>
  );
}
