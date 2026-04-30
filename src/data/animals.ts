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
    story:
      "Milo came to NHS as a stray and was initially nervous around people. With consistent care, gentle training, and patience, he has grown into a confident and affectionate companion. He loves outdoor walks and thrives on attention and play.",
    personality: ["Playful", "Loyal", "Energetic"],
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
    story:
      "Luna is currently recovering and gaining strength each day. She enjoys quiet spaces and gentle interaction, and her personality is beginning to shine as she becomes more comfortable.",
    personality: ["Gentle", "Curious", "Calm"],
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
  story:
    "Rosie is a gentle rabbit who does best in calm spaces. She is currently looking for a foster home where she can feel safe, build trust, and continue her journey toward adoption.",
  personality: ["Gentle", "Quiet", "Sweet"],
},
];