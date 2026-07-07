const WORDS = ["STRENGTH", "DISCIPLINE", "NUTRITION", "RECOVERY", "MINDSET"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-white/10 py-8">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 font-display text-5xl font-bold tracking-tight lg:text-7xl ${
                i % 2 === 0 ? "text-white" : "text-stroke"
              }`}
            >
              {word}
            </span>
            <span aria-hidden className="select-none text-accent">
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
