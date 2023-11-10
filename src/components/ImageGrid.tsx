import Image from "next/image";
export default function ImageGrid() {
  return (
    <div className="grid grid-cols-3 justify-around items-center">
      <Image
        src="/logo/sfu-logo.png"
        width={113}
        height={50}
        alt="SFU People, Equity & Inclusion"
      ></Image>
      <Image
        src="/logo/deltahotels-logo.png"
        width={57.46}
        height={71}
        alt="Delta Hotels"
        className="pl-2 items-center align-middle"
      ></Image>
      <Image
        src="/logo/fantuan-logo.png"
        width={111}
        height={38}
        alt="Fantuan"
      ></Image>
      <Image
        src="/logo/gulffraser-logo.png"
        width={78}
        height={40.96}
        alt="Gulf & Fraser"
      ></Image>
      <Image
        src="/logo/ticketmaster-logo.png"
        width={48}
        height={48}
        alt="Ticketmaster"
      ></Image>
      <Image
        src="/logo/honourhouse-logo.png"
        width={52}
        height={50}
        alt="Honour House Society"
      ></Image>
      <Image
        src="/logo/tedxsurrey-logo.png"
        width={112}
        height={28}
        alt="TEDxSurrey"
      ></Image>
      <Image
        src="/logo/prado-logo.png"
        width={60.94}
        height={39}
        alt="Prado Cafe"
      ></Image>
      <Image
        src="/logo/artvanvoucer-logo.png"
        width={97.42}
        height={9.2}
        alt="Art Vancouver"
        className="items-center"
      ></Image>
    </div>
  );
}
