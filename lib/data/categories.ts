export type Category = {
  id: string;
  path: string;
  title: string;
  description: string;
};

export const categories: Record<string, Category> = {
  animal: {
    id: "animal",
    path: "animal",
    title: "Animal Products",
    description: "Premium quality meat and animal products sourced responsibly",
  },
  arable: {
    id: "arable",
    path: "arable",
    title: "Arable & Plant-Based Products",
    description: "Sustainably grown crops and plant-based products",
  },
};