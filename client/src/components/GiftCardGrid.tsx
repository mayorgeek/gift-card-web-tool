import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { GiftCard } from "../../config";

interface GiftCardGridProps {
  giftCards: GiftCard[];
  onTrade: (card: GiftCard) => void;
}

export default function GiftCardGrid({ giftCards, onTrade }: GiftCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {giftCards.length === 0 ? (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          No gift cards found
        </div>
      ) : (
        giftCards.map((card) => (
          <Card key={card.id} className="hover-elevate" data-testid={`card-gift-${card.id}`}>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-base mb-2" data-testid={`text-card-name-${card.id}`}>
                  {card.name}
                </h3>
                <Badge variant="secondary" data-testid={`badge-category-${card.id}`}>
                  {card.category}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Buy Rate</p>
                  <p className="text-lg font-semibold" data-testid={`text-buy-rate-${card.id}`}>
                    ${card.buyRate.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sell Rate</p>
                  <p className="text-lg font-semibold" data-testid={`text-sell-rate-${card.id}`}>
                    ${card.sellRate.toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="sm"
                onClick={() => onTrade(card)}
                data-testid={`button-trade-${card.id}`}
              >
                Trade Now
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
