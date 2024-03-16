let priceSet1=[29999,39999,59999];
let priceSet2=[10000,29990,500000];
let combinedPrices=[...priceSet1,...priceSet2].sort((a,b)=>a-b);
console.log(combinedPrices);
