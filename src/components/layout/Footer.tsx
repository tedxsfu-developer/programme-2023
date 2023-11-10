import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="pt-5">
        <h4 className="inline uppercase text-white font-sm">
          Our Sponsors & Partners
        </h4>
      </div>
      <div className="grid grid-cols-3 items-center pt-5">
        <Image
          src="/logo/sfu-logo.png"
          width={113}
          height={50}
          alt="SFU People, Equity & Inclusion"
          className="justify-self-center "
        ></Image>
        <Image
          src="/logo/gulffraser-logo.png"
          width={78}
          height={40.96}
          alt="Gulf & Fraser"
          className="justify-self-center my-2"
        ></Image>

        <Image
          src="/logo/fantuan-logo.png"
          width={111}
          height={38}
          alt="Fantuan"
          className="scale-105 justify-self-center my-2"
        ></Image>
        <Image
          src="/logo/deltahotels-logo.png"
          width={57.46}
          height={71}
          alt="Delta Hotels"
          className="justify-self-center my-2"
        ></Image>

        <Image
          src="/logo/ticketmaster-logo.png"
          width={48}
          height={48}
          alt="Ticketmaster"
          className="justify-self-center my-2"
        ></Image>
        <Image
          src="/logo/honourhouse-logo.png"
          width={52}
          height={50}
          alt="Honour House Society"
          className="justify-self-center my-2"
        ></Image>
        <Image
          src="/logo/tedxsurrey-logo.png"
          width={112}
          height={28}
          alt="TEDxSurrey"
          className="justify-self-center my-2"
        ></Image>
        <Image
          src="/logo/prado-logo.png"
          width={60.94}
          height={39}
          alt="Prado Cafe"
          className="justify-self-center mt-2 mb-4"
        ></Image>
        <Image
          src="/logo/artvancouver-logo.png"
          width={97.42}
          height={9.2}
          alt="Art Vancouver"
          className="justify-self-center my-2"
        ></Image>
      </div>
      <div className="grid grid-cols-2 items-center pb-10">
        <Image
          src="/logo/paragontea-logo.png"
          width={97}
          height={97}
          alt="Art Vancouver"
          className="scale-80 justify-self-center"
        ></Image>
        <Image
          src="/logo/youthfulcities-logo.png"
          width={82}
          height={30}
          alt="Art Vancouver"
          className="scale-80 justify-self-center"
        ></Image>
      </div>
    </div>
  );
}