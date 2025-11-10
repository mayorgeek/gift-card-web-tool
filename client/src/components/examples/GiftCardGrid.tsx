import GiftCardGrid from '../GiftCardGrid';
import { vendorConfig } from '../../../config';

export default function GiftCardGridExample() {
  return (
    <div className="p-4">
      <GiftCardGrid
        giftCards={vendorConfig.giftCards.slice(0, 8)}
        onTrade={(card) => console.log('Trade:', card.name)}
      />
    </div>
  );
}
