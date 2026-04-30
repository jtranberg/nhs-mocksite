export interface Animal {
  id: string;
  name: string;
  type: "Dog" | "Cat" | "Other";
  age: string;
  status: "Available" | "Recovery" | "Foster";
  description: string;
  image: string;
}