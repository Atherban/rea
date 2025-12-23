import { projects } from "@/src/lib/projects-data";

export const metadata = {
  title: "Projects & Installations | Rajeshwari Engineering",
  description:
    "Completed electrical panel and industrial automation projects across various industries in India.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-4xl font-bold text-foreground">
          Projects & Installations
        </h1>

        <p className="mt-4 max-w-2xl text-muted">
          Our experience includes execution of electrical and automation projects
          across industrial, commercial, and infrastructure sectors.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-border bg-secondary p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {project.title}
              </h2>

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

      </div>
    </section>
  );
}
