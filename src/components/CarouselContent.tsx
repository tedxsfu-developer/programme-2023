import { guestData } from "@/data/guestsData";
import { usePathname } from "next/navigation";

export default function CarouselContent({ activeIndex, sliderImage }) {
  return (
    <div>
      {sliderImage.map((items, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={items.image} />
        </div>
      ))}
    </div>
  );
}
