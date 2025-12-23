import { notFound } from "next/navigation";
import { services } from "@/src/lib/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* =========================
   SEO Metadata
   ========================= */

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Rajeshwari Engineering & Automation`,
    description: service.shortDescription,
  };
}

/* =========================
   Page Component
   ========================= */

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-4xl font-bold text-foreground">
          {service.title}
        </h1>

        <p className="mt-6 text-lg text-muted">
          {service.longDescription}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground">
            Applications
          </h2>
          <ul className="mt-4 list-disc list-inside text-muted">
            {service.applications.map((app) => (
              <li key={app}>{app}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
