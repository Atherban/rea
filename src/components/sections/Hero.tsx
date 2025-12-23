import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Electrical Panels & Industrial Automation Solutions
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl">
            Designing, manufacturing, and commissioning reliable LT panels and
            automation systems for industrial and commercial applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Right Visual / Stats */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="rounded-lg bg-secondary p-6">
            <p className="text-3xl font-bold text-accent">10+</p>
            <p className="mt-2 text-sm text-muted">Years Experience</p>
          </div>

          <div className="rounded-lg bg-secondary p-6">
            <p className="text-3xl font-bold text-accent">500+</p>
            <p className="mt-2 text-sm text-muted">Panels Delivered</p>
          </div>

          <div className="rounded-lg bg-secondary p-6">
            <p className="text-3xl font-bold text-accent">100%</p>
            <p className="mt-2 text-sm text-muted">Quality Tested</p>
          </div>

          <div className="rounded-lg bg-secondary p-6">
            <p className="text-3xl font-bold text-accent">24/7</p>
            <p className="mt-2 text-sm text-muted">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
