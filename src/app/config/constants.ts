export const productColumns = [
  'sku',
  'name',
  'description',
  'unitPrice',
  'imageUrl',
  'active',
  'unitsInStock',
];

export const categoriesLogos: Record<number, string> = {
  1: 'icon-open-book',
  2: 'icon-drink',
  3: 'icon-hand',
  4: 'icon-clipboard',
  5: 'icon-briefcase',
};

export const categoriesI18nAlias: Record<number, string> = {
  1: 'sidebar.books',
  2: 'sidebar.coffees',
  3: 'sidebar.mouses',
  4: 'sidebar.tags',
  5: 'sidebar.bags',
};

export const actualYear = Number(new Date().getFullYear());

export const actualMonth = Number(new Date().getMonth());

export const arrayNumbersRange = (
  start: number,
  stop: number,
  step: number
): { name: number; code: number }[] => {
  const years = Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

  return years.map((year) => {
    return { name: year, code: year };
  });
};

export const months = [
  { name: '01', code: 1 },
  { name: '02', code: 2 },
  { name: '03', code: 3 },
  { name: '04', code: 4 },
  { name: '05', code: 5 },
  { name: '06', code: 6 },
  { name: '07', code: 7 },
  { name: '08', code: 8 },
  { name: '09', code: 9 },
  { name: '10', code: 10 },
  { name: '11', code: 11 },
  { name: '12', code: 12 },
];

export const initialRequestError = {
  hasError: false,
  errorMessage: null,
};

export const menuRouteItems = [
  {
    route: 'cart',
    i18nAlias: 'sidebar.cart',
    idLogo: 'pi pi-shopping-cart',
    title: 'My Cart',
  },
  {
    route: 'members',
    i18nAlias: 'sidebar.members',
    idLogo: 'pi pi-users',
    title: 'Members',
  },
  {
    route: 'orders',
    i18nAlias: 'sidebar.orders',
    idLogo: 'pi pi-id-card',
    title: 'Orders',
  },
];

export const flags = [
  'mastercard',
  'visa',
  'amex',
  'cash',
  'discover',
  'paypal',
];
