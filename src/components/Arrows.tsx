export default function Arrows({ prevSlide, nextSlide }: any) {
  return (
    <div className="cursor-pointer absolute p-1 w-auto text-body">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="prev" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}
