function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLoss = parseFloat(document.getElementById('stopLoss').value);
    var takeProfit = parseFloat(document.getElementById('takeProfit').value);
    var lotSize = parseFloat(document.getElementById('lotSize').value);

    var risk = Math.abs(entryPrice - stopLoss) * lotSize;
    var profit = Math.abs(takeProfit - entryPrice) * lotSize;

    var riskResultElement = document.getElementById('riskResult');
    var profitResultElement = document.getElementById('profitResult');

    riskResultElement.innerHTML = `Risk: $${risk.toFixed(2)} <span class="emoji">😞</span>`;
    profitResultElement.innerHTML = `Profit: $${profit.toFixed(2)} <span class="emoji">😊</span>`;

    if (profit >= risk) {
        profitResultElement.classList.add('green-text');
        riskResultElement.classList.add('red-text');
    } else {
        profitResultElement.classList.remove('green-text');
        riskResultElement.classList.remove('red-text');
    }
}
