export function useDecimals(value: number | string, decimals = 2) {
  const asNumber = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(asNumber)) return 'NaN';

  const isInt = asNumber % 1 === 0;
  return isInt ? asNumber.toString() : asNumber.toFixed(decimals);
}

export const useCurrency = (amount: number | string, minFractions: number = 0): string => {
  if (typeof amount === 'string' && isNaN(+amount)) return 'N/A';
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  const formatOptions = {
    currency: 'MXN',
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: minFractions,
  };

  const formatter = new Intl.NumberFormat('en-US', formatOptions);
  const formated = formatter.format(Math.abs(numAmount));

  return numAmount >= 0 ? formated : `-${formated}`;
};
