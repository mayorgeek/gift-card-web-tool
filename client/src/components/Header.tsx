import { Search, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vendorConfig } from "../../config";

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({ onSearchClick }: HeaderProps) {
  const handleTrade = () => {
    console.log("Trade Now clicked");
    window.open(vendorConfig.contactLinks.whatsapp, "_blank");
  };

  const handleChat = () => {
    console.log("Chat with us clicked");
    window.open(vendorConfig.contactLinks.telegram, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" data-testid="logo">{vendorConfig.logo}</span>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground" data-testid="text-business-name">
                {vendorConfig.businessName}
              </h1>
              <p className="text-xs text-muted-foreground" data-testid="text-tagline">
                {vendorConfig.tagline}
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onSearchClick}
            className="sm:hidden"
            data-testid="button-search-mobile"
          >
            <Search className="h-5 w-5" />
          </Button>

          <div className="hidden sm:flex items-center gap-2">
            <Button onClick={handleTrade} data-testid="button-trade">
              <Phone className="h-4 w-4 mr-2" />
              Trade Now
            </Button>
            <Button variant="outline" onClick={handleChat} data-testid="button-chat">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat With Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
