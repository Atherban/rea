export const metadata = {
    title: "Contact Us | Rajeshwari Engineering & Automation",
    description:
      "Contact Rajeshwari Engineering & Automation for electrical panel manufacturing and industrial automation solutions. Get in touch for quotes and technical support.",
  };
  
  export default function ContactPage() {
    return (
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
  
          {/* Left: Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Contact Us
            </h1>
  
            <p className="mt-4 text-muted max-w-md">
              Reach out to us for project discussions, technical queries, or
              quotations. Our team will respond promptly.
            </p>
  
            <div className="mt-8 space-y-4 text-sm text-muted">
              <p><strong>Company:</strong> Rajeshwari Engineering & Automation</p>
              <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p><strong>Email:</strong> info@rajeshwariengineering.com</p>
              <p><strong>Location:</strong> India</p>
            </div>
          </div>
  
          {/* Right: Contact Form */}
          <div className="rounded-lg border border-border bg-secondary p-6">
            <form method="POST" action="/api/contact" className="space-y-4">
  
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Service Required
                </label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option>LT Electrical Panels</option>
                  <option>APFC Panels</option>
                  <option>MCC / PCC Panels</option>
                  <option>PLC & SCADA Automation</option>
                  <option>VFD / Drive Panels</option>
                  <option>AMF / DG Panels</option>
                </select>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
  
              <button
                type="submit"
                className="w-full rounded-md bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Send Enquiry
              </button>
  
            </form>
          </div>
  
        </div>
      </section>
    );
  }
  