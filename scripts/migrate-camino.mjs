import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";

const client = createClient({
  projectId: "zgtjgkvi",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const PUBLIC = path.resolve("public");

async function uploadImage(filePath) {
  try {
    const asset = await client.assets.upload("image", createReadStream(path.join(PUBLIC, filePath)), { filename: path.basename(filePath) });
    console.log("  ✓ " + path.basename(filePath));
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (e) { console.log("  ✗ " + e.message); return null; }
}

const images = [
  "/images/camino-avila/camino-04.webp",
  "/images/camino-avila/camino-01.webp",
  "/images/camino-avila/camino-03.webp",
  "/images/camino-avila/camino-05.jpeg",
  "/images/camino-avila/camino-06.jpeg",
  "/images/camino-avila/camino-07.jpeg",
  "/images/camino-avila/camino-08.jpeg",
  "/images/camino-avila/camino-09.jpeg",
  "/images/camino-avila/camino-10.jpeg",
  "/images/camino-avila/camino-11.jpeg",
  "/images/camino-avila/camino-12.jpeg",
  "/images/camino-avila/camino-13.jpeg",
  "/images/camino-avila/camino-14.jpeg",
  "/images/camino-avila/camino-02.webp",
];

console.log("Uploading Camino Ávila images...");
const imageAssets = [];
for (const img of images) {
  const asset = await uploadImage(img);
  if (asset) imageAssets.push(asset);
}

console.log("\nCreating property document...");
await client.create({
  _type: "property",
  slug: { _type: "slug", current: "camino-avila" },
  titleEs: "Residencias Camino Ávila - Lujo al Pie del Ávila",
  titleEn: "Residencias Camino Ávila - Luxury at the Foot of the Avila",
  descriptionEs: "24 residencias de alta especificación en dos torres al pie del Ávila, en la exclusiva urbanización Altamira, Municipio Chacao. Arquitectura de autor, amenidades de club y vistas privilegiadas. Torre Sur con 8 unidades de 267 a 477 m² y Torre Norte con 16 unidades de 298 a 556 m². Dúplex en planta baja, apartamentos y penthouses. Cada unidad incluye 3 puestos de estacionamiento privados, maletero y cuarto de conductor con baño.",
  descriptionEn: "24 high-specification residences in two towers at the foot of the Avila, in the exclusive Altamira neighborhood, Chacao Municipality. Author-designed architecture, club-level amenities, and privileged views. South Tower with 8 units from 267 to 477 m² and North Tower with 16 units from 298 to 556 m². Ground floor duplexes, apartments, and penthouses. Each unit includes 3 private parking spaces, storage, and driver's quarters with bathroom.",
  type: "apartment",
  price: "Consultar",
  locationEs: "Altamira, Caracas",
  locationEn: "Altamira, Caracas",
  bedrooms: 4,
  bathrooms: 4,
  area: "267 - 556",
  images: imageAssets,
  featuresEs: ["24 residencias exclusivas", "Dos torres: Sur (8 uds) y Norte (16 uds)", "267 a 556 m² por unidad", "Dúplex, apartamentos y penthouses", "Piscina con solárium", "Gimnasio de última generación", "Jardines paisajísticos", "Áreas sociales multipropósito", "3 estacionamientos privados por unidad", "Cuarto de conductor con baño", "Maletero privado", "Vistas al Ávila"],
  featuresEn: ["24 exclusive residences", "Two towers: South (8 units) and North (16 units)", "267 to 556 m² per unit", "Duplexes, apartments, and penthouses", "Swimming pool with solarium", "State-of-the-art gymnasium", "Landscaped gardens", "Multi-purpose social areas", "3 private parking spaces per unit", "Driver's quarters with bathroom", "Private storage room", "Avila Mountain views"],
  featured: false,
  developer: "Camino Ávila",
});

console.log("✓ Camino Ávila created in Sanity!");
