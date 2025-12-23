export const metadata = {
    title: "About Us | Rajeshwari Engineering & Automation",
    description:
      "Learn about Rajeshwari Engineering & Automation, our expertise in electrical panel manufacturing, industrial automation, quality standards, and project execution approach.",
  };
  
  export default function AboutPage() {
    return (
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-20">
  
          {/* ===== Company Overview ===== */}
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              About Rajeshwari Engineering & Automation
            </h1>
  
            <p className="mt-6 max-w-3xl text-muted">
              Rajeshwari Engineering & Automation is a professionally managed
              engineering company engaged in the design, manufacturing, and
              execution of electrical panels and industrial automation systems.
              We deliver reliable, standards-compliant solutions for industrial
              and commercial applications.
            </p>
  
            <p className="mt-4 max-w-3xl text-muted">
              With a focus on engineering accuracy, safety, and long-term
              performance, we work closely with clients, consultants, and
              contractors to meet project-specific requirements and operational
              conditions.
            </p>
          </div>
  
          {/* ===== What We Do ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">
                What We Do
              </h2>
  
              <p className="mt-4 text-muted">
                Our core expertise lies in electrical panel manufacturing and
                industrial automation, covering the complete lifecycle from
                design and engineering to installation and commissioning.
              </p>
  
              <ul className="mt-6 list-disc list-inside text-muted space-y-2">
                <li>LT Electrical Panels (PCC, MCC)</li>
                <li>APFC and energy optimization panels</li>
                <li>PLC & SCADA based automation solutions</li>
                <li>VFD and motor control panels</li>
                <li>AMF and DG synchronization systems</li>
                <li>Testing, commissioning, and after-sales support</li>
              </ul>
            </div>
  
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="text-xl font-semibold text-foreground">
                Our Approach
              </h3>
  
              <p className="mt-4 text-sm text-muted">
                Every project begins with a clear understanding of the application,
                load requirements, site conditions, and operational constraints.
                Designs are prepared with proper calculations, drawings, and
                component selection.
              </p>
  
              <p className="mt-4 text-sm text-muted">
                Manufacturing is carried out with strict quality control, followed
                by inspection, testing, and documentation before dispatch.
              </p>
            </div>
          </div>
  
          {/* ===== Quality & Compliance ===== */}
          <div>
            <h2 className="text-3xl font-semibold text-foreground">
              Quality, Safety & Compliance
            </h2>
  
            <p className="mt-4 max-w-3xl text-muted">
              Quality and safety are integral to our engineering process. All
              panels and systems are designed and manufactured in accordance with
              applicable IS and IEC standards, ensuring safe operation, reliability,
              and ease of maintenance.
            </p>
  
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-secondary p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Standards Compliance
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Adherence to relevant electrical standards and best practices.
                </p>
              </div>
  
              <div className="rounded-lg border border-border bg-secondary p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Tested & Verified
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Panels undergo inspection and testing before delivery.
                </p>
              </div>
  
              <div className="rounded-lg border border-border bg-secondary p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Safety-Focused Design
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Proper protection, interlocking, and clear documentation.
                </p>
              </div>
            </div>
          </div>
  
          {/* ===== Industries Served ===== */}
          <div>
            <h2 className="text-3xl font-semibold text-foreground">
              Industries We Serve
            </h2>
  
            <p className="mt-4 max-w-3xl text-muted">
              Our solutions are deployed across a wide range of industries and
              applications.
            </p>
  
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-muted">
              <div>Manufacturing</div>
              <div>Process Industries</div>
              <div>Commercial Buildings</div>
              <div>Infrastructure Projects</div>
              <div>Hospitals</div>
              <div>Data Centers</div>
              <div>Utilities</div>
              <div>Water & Wastewater</div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  