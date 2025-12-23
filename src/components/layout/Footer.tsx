import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Rajeshwari Engineering & Automation
          </h3>
          <p className="mt-3 text-sm text-muted">
            Electrical panel manufacturing and industrial automation solutions
            delivering reliable, compliant, and scalable systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>📍 India</li>
            <li>📞 +91 XXXXX XXXXX</li>
            <li>✉️ info@rajeshwariengineering.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Rajeshwari Engineering & Automation. All rights reserved.
      </div>
    </footer>
  );
}
