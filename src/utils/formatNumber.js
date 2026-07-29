//форматирование суммы в читаемый вид типа $1,234.56
export const formatPrice = (price = 0) => {
  const numericPrice = Number(price) || 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(numericPrice);
};

//сокращение больших сумм в читаемые: 1.2К, 2.3В и т.д.
export const formatCompact = (value) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
};
