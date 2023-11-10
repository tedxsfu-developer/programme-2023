import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  image: string;
}

export default function ImageLayout(items: Props) {
  const pathname = usePathname();

  return (
    <div>
      <Image src={items.image} width={500} height={500} alt={items.name} />
    </div>
  );
}
