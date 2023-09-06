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

  return years.map(year => {
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

export const socialMedias = [
  {
    redirectUrl: 'https://www.linkedin.com/in/lucassacramoni/',
    idLogo: 'pi pi-linkedin',
    title: 'Linkedin',
  },
  {
    redirectUrl: 'https://www.facebook.com/lspeixotof/',
    idLogo: 'pi pi-facebook',
    title: 'Facebook',
  },
  {
    redirectUrl: 'https://www.instagram.com/lspeixotof/',
    idLogo: 'pi pi-instagram',
    title: 'Instagram',
  },
  {
    redirectUrl: 'https://github.com/lucasspeixoto',
    idLogo: 'pi pi-github',
    title: 'Github',
  },
  {
    redirectUrl:
      'https://api.whatsapp.com/send?phone=5519982621117&text=Ol%C3%A1%21+Lucas,%20tudo%20bem%20?&lang=pt_pt',
    idLogo: 'pi pi-whatsapp',
    title: 'Whatsapp',
  },
];

export const flags = ['mastercard', 'visa', 'amex', 'cash', 'discover', 'paypal'];
