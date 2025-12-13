import Img1 from "./assets/women/saree4.jpg";
import Img2 from "./assets/women/saree8.jpg";
import Img3 from "./assets/women/saree9.jpg";
import Img4 from "./assets/women/saree10.jpg";
import Img5 from "./assets/women/saree1.jpg";

import CosmeticsImg1 from "./assets/women/facewash.avif";
import CosmeticsImg2 from "./assets/women/compact-powder.webp";
import CosmeticsImg3 from "./assets/women/eye-liner.jpg";
import CosmeticsImg4 from "./assets/women/matte-lipstick.webp";
import CosmeticsImg5 from "./assets/women/moisturizer.webp";

import TopImg1 from "./assets/shirt/saree12.jpg";
import TopImg2 from "./assets/shirt/saree5.jpg";
import TopImg3 from "./assets/shirt/sadi.jpg";

export const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Benarashi Katan",
    rating: 5.0,
    color: "Gray",
    aosDelay: "0",
    description: "Authentic Benarashi Katan, perfect for weddings and Eid. Intricate zari work on premium silk.",
    price: "12,500",
    category: "Saree",
  },
  {
    id: 2,
    img: Img2,
    title: "Wedding Georgette",
    rating: 4.5,
    color: "Maroon Red",
    aosDelay: "200",
    description: "A fusion of western style and traditional drape. This maroon red Georgette saree stands out with its bold color.",
    price: "8,500",
    category: "Saree",
  },
  {
    id: 3,
    img: Img3,
    title: "Cotton Jamdani",
    rating: 4.7,
    color: "Creamy Brown",
    aosDelay: "400",
    description: "Traditional handloom Cotton Jamdani. Lightweight and comfortable, perfect for Bengali festivals.",
    price: "4,200",
    category: "Saree",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed Silk",
    rating: 4.4,
    color: "Dark Pink",
    aosDelay: "600",
    description: "Beautifully printed Half Silk saree in dark pink. A classic choice for those who love intricate designs.",
    price: "3,500",
    category: "Saree",
  },
  {
    id: 5,
    img: Img5,
    title: "Tangail Cotton",
    rating: 4.5,
    color: "Pink-Golden",
    aosDelay: "800",
    description: "Comfortable Tangail cotton saree in pink with golden accents. Breathable fabric suitable for all-day wear.",
    price: "2,800",
    category: "Saree",
  },
];

export const TopProductsData = [
  {
    id: 101, // Changed ID to avoid collision
    img: TopImg1,
    title: "Bridal Benarashi",
    description:
      "Discover the epitome of tradition with our Bridal Benarashi collection. Handwoven in Mirpur Benarashi Palli, these sarees define elegance for your special day.",
    rating: 5.0, // Added rating for consistency
    price: "25,000",
    category: "Saree",
  },
  {
    id: 102,
    img: TopImg2,
    title: "Exclusive Jamdani",
    description:
      "Elevate your attire with our premium Dhakai Jamdani. Crafted by master weavers, our Jamdani sarees are a symbol of Bengali heritage.",
    rating: 4.8,
    price: "15,000",
    category: "Saree",
  },
  {
    id: 103,
    img: TopImg3,
    title: "Party Wear Silk",
    description:
      "Explore our party wear silk saree collection. From contemporary designs to classic motifs, find the perfect outfit for any celebration.",
    rating: 4.6,
    price: "9,500",
    category: "Saree",
  },
];

export const CosmeticsData = [
  {
    id: 201,
    img: CosmeticsImg1,
    title: "Herbal Face Wash",
    rating: 4.8,
    color: "Green",
    aosDelay: "0",
    description: "Natural herbal face wash for glowing skin.",
    price: "450",
    category: "Cosmetics",
  },
  {
    id: 202,
    img: CosmeticsImg4,
    title: "Matte Lipstick",
    rating: 4.7,
    color: "Red",
    aosDelay: "200",
    description: "Long-lasting matte lipstick in vibrant red.",
    price: "850",
    category: "Cosmetics",
  },
  {
    id: 203,
    img: CosmeticsImg5,
    title: "Skin Moisturizer",
    rating: 4.9,
    color: "White",
    aosDelay: "400",
    description: "Hydrating moisturizer for all skin types.",
    price: "1,200",
    category: "Cosmetics",
  },
  {
    id: 204,
    img: CosmeticsImg3,
    title: "Eyeliner Waterproof",
    rating: 4.6,
    color: "Black",
    aosDelay: "600",
    description: "Smudge-proof waterproof eyeliner.",
    price: "550",
    category: "Cosmetics",
  },
  {
    id: 205,
    img: CosmeticsImg2,
    title: "Compact Powder",
    rating: 4.5,
    color: "Beige",
    aosDelay: "800",
    description: "Smooth finish compact powder for perfect look.",
    price: "900",
    category: "Cosmetics",
  },
];

export const getAllProducts = () => {
  return [...ProductsData, ...TopProductsData, ...CosmeticsData];
}

export const getProductById = (id) => {
  // ParseInt just in case id comes as a string from URL
  const numericId = parseInt(id, 10);
  return getAllProducts().find((product) => product.id === numericId);
};

export const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace(/,/g, ""), 10);
};
