import GiftCardTable from '../GiftCardTable';
import { vendorConfig } from '../../../config';

export default function GiftCardTableExample() {
  return (
    <div className="p-4">
      <GiftCardTable
        giftCards={vendorConfig.giftCards.slice(0, 5)}
        onTrade={(card) => console.log('Trade:', card.name)}
      />
    </div>
  );
}
