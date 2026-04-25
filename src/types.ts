/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  price: string;
  image: string;
  note?: string;
}

export const FEATURED_EVENTS: Event[] = [
  {
    id: '1',
    title: "Swan Lake: The Retrospective",
    category: "Ballet",
    date: "Oct 12 - 24",
    location: "Esplanade Theatre",
    price: "65",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "Mahler's Symphony No. 5",
    category: "Symphony",
    date: "Nov 05",
    location: "Victoria Concert Hall",
    price: "45",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "Horizons: Modernist Visions",
    category: "Exhibition",
    date: "Ongoing",
    location: "National Gallery",
    price: "20",
    image: "https://images.unsplash.com/photo-1491243513677-3cad3.84a33?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '4',
    title: "The Glass Menagerie",
    category: "Theatre",
    date: "Dec 01 - 15",
    location: "Drama Centre Theatre",
    price: "55",
    image: "https://images.unsplash.com/photo-1503095396549-807fd992edof?q=80&w=2070&auto=format&fit=crop"
  }
];

export const SEARCH_RESULTS: Event[] = [
  {
    id: '5',
    title: "London Symphony Orchestra: Mahler's 5th",
    category: "Music",
    date: "Oct 12, 2024",
    location: "Grand Hall",
    price: "85",
    image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=2070&auto=format&fit=crop",
    note: "Remember to check if seats in row G are available, acoustic was perfect last time."
  },
  {
    id: '6',
    title: "Twilight Symphony in the Botanic Gardens",
    category: "Music",
    date: "Nov 05, 2024",
    location: "Botanic Gardens",
    price: "45",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
  }
];
