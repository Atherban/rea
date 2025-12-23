export default function AboutOverview() {
    return (
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              About Rajeshwari Engineering & Automation
            </h2>
  
            <p className="mt-6 text-muted max-w-xl">
              Rajeshwari Engineering & Automation is engaged in the design,
              manufacturing, and execution of electrical panels and industrial
              automation systems. We work closely with clients to deliver reliable,
              standards-compliant solutions tailored to real-world operating
              conditions.
            </p>
  
            <p className="mt-4 text-muted max-w-xl">
              Our expertise spans LT panel manufacturing, power control systems,
              automation integration, testing, and on-site commissioning for
              industrial and commercial applications.
            </p>
          </div>
  
          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Engineering Expertise
              </h3>
              <p className="mt-2 text-sm text-muted">
                Designs based on proper load calculations, schematics, and
                application-specific requirements.
              </p>
            </div>
  
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Quality Manufacturing
              </h3>
              <p className="mt-2 text-sm text-muted">
                In-house panel fabrication with strict quality checks and testing
                before dispatch.
              </p>
            </div>
  
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Compliance & Safety
              </h3>
              <p className="mt-2 text-sm text-muted">
                Panels built in accordance with applicable IS and IEC standards to
                ensure operational safety.
              </p>
            </div>
  
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="text-lg font-semibold text-foreground">
                End-to-End Execution
              </h3>
              <p className="mt-2 text-sm text-muted">
                From design and manufacturing to installation and commissioning at
                site.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  