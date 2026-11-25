export type Item = {
  name: string;
  price: number;
  inStock: boolean;
};

export type Category = {
  slug: string;
  name: string;
  icon: string;
  items: Item[];
};

// Временные демо-данные. Позже сюда подставим реальный каталог.
export const categories: Category[] = [
  {
    slug: 'processors',
    name: 'Процессоры',
    icon: '◈',
    items: [
      { name: 'Ryzen 7 7800X3D', price: 32900, inStock: true },
      { name: 'Core i5-14600K', price: 21500, inStock: false },
    ],
  },
  {
    slug: 'graphics',
    name: 'Видеокарты',
    icon: '▧',
    items: [
      { name: 'RTX 4070 Super', price: 58900, inStock: true },
      { name: 'RX 7800 XT', price: 47900, inStock: true },
    ],
  },
  {
    slug: 'memory',
    name: 'Память',
    icon: '▤',
    items: [
      { name: 'DDR5 32GB 6000MT/s', price: 8900, inStock: true },
      { name: 'DDR4 16GB 3200MT/s', price: 3200, inStock: true },
    ],
  },
  {
    slug: 'storage',
    name: 'Накопители',
    icon: '◫',
    items: [
      { name: 'NVMe 2TB Gen4', price: 12900, inStock: true },
      { name: 'SATA SSD 1TB', price: 6400, inStock: false },
    ],
  },
  {
    slug: 'motherboards',
    name: 'Материнские платы',
    icon: '⌘',
    items: [
      { name: 'B650 AM5', price: 15900, inStock: true },
      { name: 'Z790 LGA1700', price: 19900, inStock: true },
    ],
  },
  {
    slug: 'cooling',
    name: 'Охлаждение',
    icon: '❋',
    items: [
      { name: 'Башенный кулер 240 мм', price: 8200, inStock: true },
      { name: 'Водяная СЖО 360 мм', price: 14500, inStock: false },
    ],
  },
];

export const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
