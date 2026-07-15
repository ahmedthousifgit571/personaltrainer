export type Testimonial = {
  slug: string;
  quote: string;
  name: string;
  role: string;
  /** Only long quotes get clamped on the homepage with a link through to the full page. */
  long?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    slug: "daniel-okafor",
    quote:
      "I trained around the same injury for three years. Twelve weeks in, it’s gone and I’m moving more weight at forty than I did at twenty-five. This isn’t a program. It’s a rebuild.",
    name: "DANIEL OKAFOR",
    role: "FOUNDER & EX-RUGBY UNION",
  },
  {
    slug: "hari",
    quote:
      "What Easa offered me is something I needed all along. As everybody knows, everything is on the internet, but the problem is you don’t need everything — you need only what you need. In that aspect, all I needed was accountability, and trust me, I thought my form was impeccable and I was always pushing my max — until I got on board with Easa. He engineered and tailored a workout routine and nutrition approach that would work for me. Unfortunately, I couldn’t provide blood work. Despite that, through constant monitoring we figured out the small changes in nutrition, training menu and even form. These weren’t sweeping changes, but small ones that had a bigger impact on the outcome. I got the missing puzzle piece for myself. So if you think why you’d want to hire a coach like Easa — it’s because you need the correct piece that fits your puzzle, one that’s not redundant but completes it.",
    name: "HARI",
    role: "CLIENT — GERMANY",
    long: true,
  },
];

export function getTestimonial(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}
