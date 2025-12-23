import Link from "next/link";
import { projects } from "@/src/lib/projects-data";

export default function ProjectsOverview() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">
            Projects & Installations
          </h2>
          <p className="mt-4 text-muted">
            A selection of projects executed across industrial and commercial
            sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="rounded-lg bg-background border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-muted">
                <strong>Client:</strong> {project.client}
              </p>
              <p className="text-sm text-muted">
                <strong>Location:</strong> {project.location}
              </p>

              <p className="mt-4 text-sm text-muted">
                {project.scope}
              </p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-block rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
