import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { getTestimonial, testimonials } from "@/lib/testimonials";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return testimonials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = getTestimonial(slug);
  if (!testimonial) return {};

  return {
    title: `${testimonial.name} — ${BRAND}`,
    description: testimonial.quote,
  };
}

export default async function TestimonialPage({ params }: PageProps) {
  const { slug } = await params;
  const testimonial = getTestimonial(slug);
  if (!testimonial) notFound();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 lg:py-24">
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-3 font-label text-[11px] tracking-[0.3em] text-white/60 transition-colors hover:text-accent"
      >
        <ArrowLeft
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:-translate-x-1.5"
        />
        BACK TO {BRAND}
      </Link>

      <figure className="mt-16 lg:mt-24">
        <span
          aria-hidden
          className="mb-6 block font-display text-6xl leading-none text-accent"
        >
          &ldquo;
        </span>
        <blockquote className="text-xl leading-relaxed text-white/90 lg:text-2xl lg:leading-relaxed">
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-10 font-label text-[11px] tracking-[0.3em] text-white/60">
          {testimonial.name} — {testimonial.role}
        </figcaption>
      </figure>
    </main>
  );
}
