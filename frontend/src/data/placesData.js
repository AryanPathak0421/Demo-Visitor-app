// placesData.js (default export + named export)
export const places = [
  {
    id: 1,
    name: "Rajwada Palace",
    category: "Historical",
    description: "An iconic seven-story palace of the Holkar rulers, central to Indore's heritage.",
    bestTime: ["Evening", "Weekend"],
    ticketRequired: true,
    price: 25,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/500px-Indore_Rajwada01.jpg"
  },
  {
    id: 2,
    name: "Kamala Nehru Prani Sangrahalaya (Zoo)",
    category: "Nature",
    description: "Home to white tigers and diverse wildlife — great for families and students.",
    bestTime: ["Morning", "Day"],
    ticketRequired: true,
    price: 50,
    imageUrl: "https://vushii.com/uploads/12059728_Kamla%20Nehru.png"
  },
  {
    id: 3,
    name: "Meghdoot Garden",
    category: "Nature",
    description: "A serene garden with walking paths, fountains and seasonal blooms.",
    bestTime: ["Morning", "Evening"],
    ticketRequired: false,
    price: 0,
    imageUrl: "https://yometro.com/images/places/meghdoot-garden.jpg"
  },
  {
    id: 4,
    name: "Sarafa Bazaar",
    category: "Food/Nightlife",
    description: "Daytime jewellery market and famous night food bazaar — a must-visit.",
    bestTime: ["Night", "Evening"],
    ticketRequired: false,
    price: 0,
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/10/08/1759861886127-history-of-sarafa-bazaar-indore.jpeg"
  }
];

export default places;
