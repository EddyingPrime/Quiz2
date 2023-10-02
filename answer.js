// Example dataset
const salesData = [
  { product: "Product A", profit: 100 },
  { product: "Product B", profit: -50 },
  { product: "Product C", profit: 25 },
  { product: "Product D", profit: 50 },
  { product: "Product E", profit: 5 },
];

const result = findProfitStats(salesData);

console.log("Product with Highest Profit:", result.highestProfit);
console.log("Product with Lowest Profit:", result.lowestProfit);
console.log("Product with Nearest to Zero Profit:", result.nearestToZeroProfit);

function findProfitStats(data) {
  if (data.length === 0) {
    return "No data available.";
  }

  let highestProfitProduct = data[0];
  let lowestProfitProduct = data[0];
  let nearestToZeroProduct = data[0];

  for (let n = 1; n < data.length; n++) {
    if (data[n].profit > highestProfitProduct.profit) {
      highestProfitProduct = data[n];
    }

    if (data[n].profit < lowestProfitProduct.profit) {
      lowestProfitProduct = data[n];
    }

    if (Math.abs(data[n].profit) < Math.abs(nearestToZeroProduct.profit)) {
      nearestToZeroProduct = data[n];
    }
  }

  return {
    highestProfit: highestProfitProduct,
    lowestProfit: lowestProfitProduct,
    nearestToZeroProfit: nearestToZeroProduct,
  };
}
