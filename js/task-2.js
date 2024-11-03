function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
  return totalPrice;
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);
