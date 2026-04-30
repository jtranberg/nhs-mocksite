import type { Animal } from "../types/animal";
export const animals: Animal[] = [
  {
    id: "milo",
    name: "Milo",
    type: "Dog",
    age: "2 years",
    status: "Available",
    description: "Playful, loyal, and ready for a forever home.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "luna",
    name: "Luna",
    type: "Cat",
    age: "1 year",
    status: "Recovery",
    description: "Gentle, curious, and slowly showing her bright personality.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rosie",
    name: "Rosie",
    type: "Other",
    age: "8 months",
    status: "Foster",
    description: "Sweet, quiet, and looking for a calm temporary home.",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
  },
];