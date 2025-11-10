import { vendorConfig } from "../../config";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{vendorConfig.logo}</span>
              <h3 className="font-bold text-lg">{vendorConfig.businessName}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {vendorConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {vendorConfig.contactLinks.email && (
                <p data-testid="text-footer-email">{vendorConfig.contactLinks.email}</p>
              )}
              {vendorConfig.contactLinks.phone && (
                <p data-testid="text-footer-phone">{vendorConfig.contactLinks.phone}</p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="hover:text-foreground cursor-pointer">Privacy Policy</p>
              <p className="hover:text-foreground cursor-pointer">Terms of Service</p>
              <p className="hover:text-foreground cursor-pointer">FAQ</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {vendorConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
