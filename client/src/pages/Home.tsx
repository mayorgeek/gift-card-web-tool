import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import GiftCardTable from "@/components/GiftCardTable";
import GiftCardGrid from "@/components/GiftCardGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { vendorConfig, type GiftCard } from "../../config";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return vendorConfig.giftCards;
    
    const query = searchQuery.toLowerCase();
    return vendorConfig.giftCards.filter(
      (card) =>
        card.name.toLowerCase().includes(query) ||
        card.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleTrade = (card: GiftCard) => {
    console.log("Trading:", card.name);
    toast({
      title: "Starting Trade",
      description: `Opening chat to trade ${card.name}...`,
    });
    setTimeout(() => {
      window.open(vendorConfig.contactLinks.whatsapp, "_blank");
    }, 500);
  };

  const handleSearchClick = () => {
    const searchElement = document.getElementById("search-section");
    searchElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onSearchClick={handleSearchClick} />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 border-b">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-hero-title">
                Check Gift Card Rates Instantly
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-description">
                Get the best rates for your gift cards. Trade securely with competitive buy and sell prices.
              </p>
            </div>
            
            <div id="search-section" className="flex justify-center pt-2">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["iTunes", "Amazon", "Steam", "Google Play"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="text-sm px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover-elevate active-elevate-2"
                  data-testid={`button-tag-${tag.toLowerCase().replace(" ", "-")}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Current Rates</h3>
            <p className="text-muted-foreground">
              Showing {filteredCards.length} gift card{filteredCards.length !== 1 ? 's' : ''}
            </p>
          </div>

          <Tabs defaultValue="grid" className="space-y-6">
            <TabsList data-testid="tabs-view">
              <TabsTrigger value="grid" data-testid="tab-grid">Grid View</TabsTrigger>
              <TabsTrigger value="table" data-testid="tab-table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="space-y-6">
              <GiftCardGrid giftCards={filteredCards} onTrade={handleTrade} />
            </TabsContent>

            <TabsContent value="table" className="space-y-6">
              <div className="hidden md:block">
                <GiftCardTable giftCards={filteredCards} onTrade={handleTrade} />
              </div>
              <div className="md:hidden">
                <GiftCardGrid giftCards={filteredCards} onTrade={handleTrade} />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
