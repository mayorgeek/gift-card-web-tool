let allCards = VENDOR_CONFIG.giftCards;
let filteredCards = allCards;

function renderRates(cards) {
  const ratesList = document.getElementById('ratesList');
  
  if (cards.length === 0) {
    ratesList.innerHTML = '<div class="empty-state">No gift cards found</div>';
    return;
  }
  
  ratesList.innerHTML = cards.map(card => `
    <div class="rate-card">
      <div class="rate-card-header">
        <div class="rate-card-name">${card.name}</div>
        <div class="rate-card-category">${card.category}</div>
      </div>
      <div class="rate-card-rates">
        <div class="rate-item">
          <div class="rate-label">Buy Rate</div>
          <div class="rate-value">$${card.buyRate.toFixed(2)}</div>
        </div>
        <div class="rate-item">
          <div class="rate-label">Sell Rate</div>
          <div class="rate-value">$${card.sellRate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function handleSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    filteredCards = allCards;
  } else {
    filteredCards = allCards.filter(card => 
      card.name.toLowerCase().includes(searchTerm) ||
      card.category.toLowerCase().includes(searchTerm)
    );
  }
  
  renderRates(filteredCards);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

document.getElementById('tradeBtn').addEventListener('click', () => {
  if (VENDOR_CONFIG.contactLinks.whatsapp) {
    chrome.tabs.create({ url: VENDOR_CONFIG.contactLinks.whatsapp });
  }
});

document.getElementById('chatBtn').addEventListener('click', () => {
  if (VENDOR_CONFIG.contactLinks.telegram) {
    chrome.tabs.create({ url: VENDOR_CONFIG.contactLinks.telegram });
  }
});

document.querySelector('.business-name').textContent = VENDOR_CONFIG.businessName;
document.querySelector('.tagline').textContent = VENDOR_CONFIG.tagline;
document.querySelector('.logo').textContent = VENDOR_CONFIG.logo;

renderRates(filteredCards);
