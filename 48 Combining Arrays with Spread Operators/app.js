var priceSet1 = [29999, 39999, 59999];
var priceSet2 = [10000, 29990, 500000];
var combinedPrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
