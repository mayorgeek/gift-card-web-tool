import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { GiftCard } from "../../config";

interface GiftCardTableProps {
  giftCards: GiftCard[];
  onTrade: (card: GiftCard) => void;
}

export default function GiftCardTable({ giftCards, onTrade }: GiftCardTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">
              <div className="flex items-center gap-1">
                Gift Card
                <ArrowUpDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold text-right">Buy Rate</TableHead>
            <TableHead className="font-semibold text-right">Sell Rate</TableHead>
            <TableHead className="text-right font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {giftCards.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                No gift cards found
              </TableCell>
            </TableRow>
          ) : (
            giftCards.map((card) => (
              <TableRow key={card.id} className="hover-elevate" data-testid={`row-card-${card.id}`}>
                <TableCell className="font-medium" data-testid={`text-card-name-${card.id}`}>
                  {card.name}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" data-testid={`badge-category-${card.id}`}>
                    {card.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-lg" data-testid={`text-buy-rate-${card.id}`}>
                  ${card.buyRate.toFixed(2)}
                </TableCell>
                <TableCell className="text-right font-semibold text-lg" data-testid={`text-sell-rate-${card.id}`}>
                  ${card.sellRate.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    onClick={() => onTrade(card)}
                    data-testid={`button-trade-${card.id}`}
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
