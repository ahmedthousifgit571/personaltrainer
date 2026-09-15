export type Testimonial = {
  slug: string;
  quote: string;
  name: string;
  role?: string;
  /** Only long quotes get clamped on the homepage with a link through to the full page. */
  long?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    slug: "client-qatar",
    quote:
      "Working with you has been a great experience. Everything was tailored to my lifestyle, not a generic plan. You explained things clearly, kept me accountable, and adjusted whenever something wasn’t working. I appreciated the honesty no shortcuts, just real guidance. Overall, very solid coaching and I’d definitely recommend you.",
    name: "A CLIENT FROM QATAR",
  },
  {
    slug: "hari",
    quote:
      "What Easa offered me is something I needed all along. As everybody knows, everything is on the internet, but the problem is you don’t need everything — you need only what you need. In that aspect, all I needed was accountability, and trust me, I thought my form was impeccable and I was always pushing my max — until I got on board with Easa. He engineered and tailored a workout routine and nutrition approach that would work for me. Unfortunately, I couldn’t provide blood work. Despite that, through constant monitoring we figured out the small changes in nutrition, training menu and even form. These weren’t sweeping changes, but small ones that had a bigger impact on the outcome. I got the missing puzzle piece for myself. So if you think why you’d want to hire a coach like Easa — it’s because you need the correct piece that fits your puzzle, one that’s not redundant but completes it.",
    name: "HARI",
    role: "CLIENT — GERMANY",
    long: true,
  },
  {
    slug: "vishnu",
    quote:
      "Any trainer can give you a diet plan, a workout plan, and do a weekly check-in. Easa didn’t just do that — he went above and beyond.\n\nDuring the first few months of working with him, I kept wavering with my diet and workouts. I found excuses not to go to the gym, struggled to stay consistent, and honestly found it difficult to stick to the plan. Easa never made me feel bad about it. Instead, he would gently course-correct me, check in on me, encourage me, and make sure I always found my way back on track.\n\nHe understood that building a healthier lifestyle isn’t just about following a plan perfectly — sometimes you need someone who believes in you, keeps you accountable, and reminds you why you started.\n\nAnd today, I’m here, more than 30 kg lighter, significantly stronger, and with a lot more muscle than when I started. I genuinely feel like a new man.\n\nI’m incredibly grateful to Easa, not just for the physical transformation, but for the support, patience, motivation, and friendship he has given me throughout the journey.\n\nSomewhere along the way, our trainer-client relationship became a genuine bond. I talk to him the way I talk to my cousins, and honestly, I feel like he has become one of them.\n\nThanks, bro, for everything. I truly couldn’t have come this far without you.",
    name: "VISHNU",
    role: "CLIENT — CANADA",
    long: true,
  },
];

export function getTestimonial(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}
