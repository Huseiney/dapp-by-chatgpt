const connectWalletBtn = document.getElementById('connect-wallet');
const getTokensBtn = document.getElementById('get-tokens');
const transactionsList = document.getElementById('transactions');

connectWalletBtn.addEventListener('click', function() {
  // Connect to wallet
});

getTokensBtn.addEventListener('click', function() {
  // Get tokens from contact address
});

function addTransaction(transaction) {
  const li = document.createElement('li');
  li.textContent = transaction;
  transactionsList.appendChild(li);
}

// Automate
