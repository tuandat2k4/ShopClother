export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: PriceRange;
  dressStyle: string[];
  sortBy: string;
}

export const defaultFilters: FilterState = {
  categories: [],
  sizes: [],
  colors: [],
  priceRange: { min: 0, max: 500 },
  dressStyle: [],
  sortBy: "popular",
};
