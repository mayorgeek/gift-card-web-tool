import { Phone, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { vendorConfig } from "../../config";

export default function ContactSection() {
  const contacts = [
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      url: vendorConfig.contactLinks.whatsapp,
      color: "text-green-600",
      show: !!vendorConfig.contactLinks.whatsapp,
    },
    {
      icon: SiTelegram,
      label: "Telegram",
      url: vendorConfig.contactLinks.telegram,
      color: "text-blue-500",
      show: !!vendorConfig.contactLinks.telegram,
    },
    {
      icon: Phone,
      label: "Phone",
      url: `tel:${vendorConfig.contactLinks.phone}`,
      color: "text-primary",
      show: !!vendorConfig.contactLinks.phone,
    },
    {
      icon: Mail,
      label: "Email",
      url: `mailto:${vendorConfig.contactLinks.email}`,
      color: "text-primary",
      show: !!vendorConfig.contactLinks.email,
    },
  ].filter((c) => c.show);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get In Touch</CardTitle>
        <CardDescription>
          Ready to trade? Contact us through any of these channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <Button
                key={contact.label}
                variant="outline"
                className="justify-start gap-3 h-auto py-3"
                onClick={() => window.open(contact.url, "_blank")}
                data-testid={`button-contact-${contact.label.toLowerCase()}`}
              >
                <Icon className={`h-5 w-5 ${contact.color}`} />
                <span className="flex-1 text-left">{contact.label}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
