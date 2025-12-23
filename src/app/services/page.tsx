import Link from "next/link";
import { services } from "@/src/lib/services-data";

export const metadata = {
  title: "Electrical & Automation Services | Rajeshwari Engineering",
  description:
    "Electrical panel manufacturing and industrial automation services including LT panels, APFC, MCC, PLC, SCADA, and DG synchronization.",
};

export default function ServicesPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-4xl font-bold text-foreground">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          We offer end-to-end electrical panel manufacturing and industrial
          automation services designed for safety, reliability, and performance.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-lg border border-border bg-secondary p-6 hover:border-accent transition-colors"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-muted">
                {service.shortDescription}
              </p>
              <p className="mt-4 text-sm font-semibold text-accent">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
