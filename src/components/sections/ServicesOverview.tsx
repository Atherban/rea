import Link from "next/link";

const services = [
  {
    title: "LT Electrical Panels",
    slug: "lt-electrical-panels",
    description:
      "Design and manufacturing of low tension electrical panels for safe and efficient power distribution.",
  },
  {
    title: "APFC Panels",
    slug: "apfc-panels",
    description:
      "Automatic Power Factor Correction panels to reduce penalties and improve electrical efficiency.",
  },
  {
    title: "MCC & PCC Panels",
    slug: "mcc-pcc-panels",
    description:
      "Motor Control Centers and Power Control Centers built to meet industrial operational demands.",
  },
  {
    title: "PLC & SCADA Automation",
    slug: "plc-scada-automation",
    description:
      "Industrial automation solutions using PLC and SCADA systems for monitoring and control.",
  },
  {
    title: "VFD & Drive Panels",
    slug: "vfd-drive-panels",
    description:
      "Variable Frequency Drive panels for precise motor speed control and energy savings.",
  },
  {
    title: "AMF & DG Synchronization",
    slug: "amf-dg-panels",
    description:
      "Automatic mains failure and DG synchronization panels for uninterrupted power supply.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted">
            We provide complete electrical panel manufacturing and industrial
            automation solutions tailored to project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-border bg-secondary p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {service.description}
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
