import Link from "next/link";

function ReturnButton() {
  return (
    <nav className="flex">
      <Link href="/" className="flex gap-2 items-center pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className="w-2 stroke-ted-grey"
        >
          <path d="M7 1L2 6L7 11" stroke-width="1.5" />
        </svg>
        <h4 className="uppercase text-ted-grey text-caption">Return</h4>
      </Link>
    </nav>
  );
}

export default ReturnButton;
