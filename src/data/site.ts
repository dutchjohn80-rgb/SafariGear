export type Product = {
  id: string;
  title: string;
  price: number;
  rental: number;
  rating: number;
  reviews: number;
  tag: string;
  img: string;
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Explore Gear', href: '#gear' },
  { label: 'Packages', href: '#planner' },
  { label: 'Contact', href: '#contact' },
];

export const brands = ['The North Face', 'Patagonia', 'Osprey', 'Black Diamond', 'Arc\'teryx', 'Salomon', 'Mammut', 'Leki', 'Marmot', 'Petzl'];

export const categories = [
  { title: 'Trekking Equipment', items: ['Backpacks', 'Boots', 'Walking Poles'], icon: 'M4 20l6-12 4 7 2-3 4 8H4z', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=70' },
  { title: 'Alpine Apparel', items: ['Thermal Jackets', 'Waterproof Layers', 'Gloves'], icon: 'M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7l4-4z', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=900&q=70' },
  { title: 'Camp Essentials', items: ['Sub-zero Sleeping Bags', 'High-Altitude Tents'], icon: 'M3 20L12 4l9 16H3zm9-8l-4 8h8l-4-8z', img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=70' },
];

export const products: Product[] = [
  { id: 'p1', title: 'Summit Pro 65L Backpack', price: 289, rental: 12, rating: 4.9, reviews: 214, tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=900&q=70' },
  { id: 'p2', title: 'Uhuru Down Parka −30°C', price: 449, rental: 18, rating: 4.8, reviews: 167, tag: 'Summit night', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=70' },
  { id: 'p3', title: 'Kibo GTX Trekking Boots', price: 239, rental: 10, rating: 4.7, reviews: 302, tag: 'Waterproof', img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&q=70' },
  { id: 'p4', title: 'Meru Ridge 45L Pack', price: 219, rental: 9, rating: 4.8, reviews: 146, tag: 'Trail ready', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&q=70' },
  { id: 'p5', title: 'Apex Thermal Layer Set', price: 179, rental: 8, rating: 4.9, reviews: 198, tag: 'Cold weather', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=70' },
  { id: 'p6', title: 'Kibo Summit Tent Lite', price: 329, rental: 14, rating: 4.8, reviews: 109, tag: 'Camp comfort', img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=70' },
];

export const packages = {
  kili: {
    name: 'Kibo Summit Pack',
    route: 'Machame route',
    items: [
      ['65L Backpack', 12],
      ['−30°C Down Parka', 18],
      ['GTX Trekking Boots', 10],
      ['−20°C Sleeping Bag', 14],
      ['Trekking Poles (pair)', 4],
      ['Headlamp & Gaiters', 5],
    ],
  },
  meru: {
    name: 'Meru Ridge Pack',
    route: 'Momella route',
    items: [
      ['45L Backpack', 9],
      ['Insulated Jacket', 12],
      ['GTX Trekking Boots', 10],
      ['−10°C Sleeping Bag', 9],
      ['Trekking Poles (pair)', 4],
    ],
  },
} as const;
