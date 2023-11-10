interface Props {
  location: string;
  desc: string;
}

function LunchActivity(items: Props) {
  return (
    <div className="grid grid-cols-2 items-stretch text-body font-normal">
      <div className="text-ted-grey lg:flex">{items.location}</div>
      <div>{items.desc}</div>
    </div>
  );
}

export default LunchActivity;
