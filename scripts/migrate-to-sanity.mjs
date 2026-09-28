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
  const fullPath = path.join(PUBLIC, filePath);
  try {
    const asset = await client.assets.upload("image", createReadStream(fullPath), {
      filename: path.basename(filePath),
    });
    console.log(`  ✓ Uploaded ${path.basename(filePath)}`);
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (e) {
    console.log(`  ✗ Failed ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

async function uploadFile(filePath) {
  const fullPath = path.join(PUBLIC, filePath);
  try {
    const asset = await client.assets.upload("file", createReadStream(fullPath), {
      filename: path.basename(filePath),
    });
    console.log(`  ✓ Uploaded file ${path.basename(filePath)}`);
    return { _type: "file", asset: { _type: "reference", _ref: asset._id } };
  } catch (e) {
    console.log(`  ✗ Failed file ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

const properties = [
  {
    id: "alma-caracas",
    titleEs: "Alma Wellness - Residencias y Oficinas de Lujo",
    titleEn: "Alma Wellness - Luxury Residences & Offices",
    descriptionEs: "El nuevo referente de bienestar y sofisticación en Las Mercedes. Alma Wellness es un proyecto residencial y comercial de lujo enfocado en longevidad, que integra diseño de primer nivel con experiencias de bienestar integrales. Apartamentos tipo Master Suite desde 40 m² hasta 141 m², con 1 a 3 habitaciones. Consultoría de bienestar por Erika Ramelli, Top Global Wellness Consultant.",
    descriptionEn: "The new benchmark of wellbeing and sophistication in Las Mercedes. Alma Wellness is a luxury residential and commercial development focused on longevity, integrating high-end design with comprehensive wellness experiences. Master Suite apartments from 40 m² to 141 m², with 1 to 3 bedrooms. Wellness consulting by Erika Ramelli, Top Global Wellness Consultant.",
    type: "apartment",
    price: "Consultar",
    locationEs: "Las Mercedes, Caracas",
    locationEn: "Las Mercedes, Caracas",
    bedrooms: 3,
    bathrooms: 3,
    area: "40 - 141",
    featured: true,
    developer: "Grupo Binian",
    website: "https://www.almacaracas.com",
    images: [
      "/images/alma-caracas/alma_wellness_noche_exterior_2_nuevo.jpg",
      "/images/alma-caracas/alma_wellness_principal_noche_1.webp",
      "/images/alma-caracas/alma_wellness_peatonal_nuevo.jpg",
      "/images/alma-caracas/amenidad-piscina-nueva.jpg",
      "/images/alma-caracas/amenidad-lobby-nuevo-1.jpg",
      "/images/alma-caracas/amenidad-gym-nuevo.jpg",
      "/images/alma-caracas/amenidad-spa-nueva.jpg",
      "/images/alma-caracas/amenidad-terraza-yoga-nueva.jpeg",
      "/images/alma-caracas/amenidad-pilates-nueva.jpg",
      "/images/alma-caracas/amenidad-coffee-fdflonks.jpeg",
      "/images/alma-caracas/amenidad-coworking-nueva.jpeg",
      "/images/alma-caracas/alma_wellness_rooftop_high_quality-2.jpg",
    ],
    featuresEs: ["Rooftop & Padel Club", "Piscina Infinity", "Gimnasio Premium", "Terraza de Yoga & Meditación", "Estudio de Pilates", "Spa & Cold Plunge", "Coffee & Juice Bar", "Sala de Meditación", "Hidroterapia", "Boxing & Coworking", "Oficinas desde 19 m²", "Vistas al Ávila"],
    featuresEn: ["Rooftop & Padel Club", "Infinity Pool", "Premium Gym", "Yoga & Meditation Terrace", "Pilates Studio", "Spa & Cold Plunge", "Coffee & Juice Bar", "Meditation Room", "Hydrotherapy", "Boxing & Coworking", "Offices from 19 m²", "Avila Mountain Views"],
  },
  {
    id: "castellana-58",
    titleEs: "Castellana 58 - Arquitectura Contemporánea",
    titleEn: "Castellana 58 - Contemporary Architecture",
    descriptionEs: "Los apartamentos de Castellana 58 han sido concebidos como espacios donde la arquitectura, la luz y el paisaje convergen en una experiencia de vida excepcional. Cada residencia se define por una distribución abierta y fluida, con amplias superficies acristaladas que enmarcan vistas privilegiadas hacia el Ávila. Materiales nobles — maderas cálidas, superficies pétreas y detalles cuidadosamente seleccionados.",
    descriptionEn: "The apartments at Castellana 58 have been conceived as spaces where architecture, light, and landscape converge in an exceptional living experience. Each residence features an open and fluid layout, with expansive glass surfaces framing privileged views of the Avila. Noble materials — warm woods, stone surfaces, and carefully selected details.",
    type: "apartment",
    price: "Consultar",
    locationEs: "La Castellana, Caracas",
    locationEn: "La Castellana, Caracas",
    bedrooms: 3,
    bathrooms: 3,
    area: "Consultar",
    featured: true,
    developer: "Grupo Binian",
    brochure: "/brochures/castellana-58.pdf",
    images: [
      "/images/castellana-58/castellana-14.jpg",
      "/images/castellana-58/castellana-01.jpg",
      "/images/castellana-58/castellana-02.jpg",
      "/images/castellana-58/castellana-04.jpg",
      "/images/castellana-58/castellana-07.jpg",
      "/images/castellana-58/castellana-11.jpg",
    ],
    featuresEs: ["Piscina con vista al Ávila", "Gimnasio de última generación", "Coworking & Business Lounge", "Lobby tipo galería contemporánea", "Estacionamiento en sótanos", "Fachada con jardineras integradas", "Concreto arquitectónico y madera", "Superficies acristaladas panorámicas"],
    featuresEn: ["Pool with Avila views", "State-of-the-art gym", "Coworking & Business Lounge", "Contemporary gallery-style lobby", "Underground parking", "Facade with integrated planters", "Architectural concrete and wood", "Panoramic glass surfaces"],
  },
  {
    id: "quarzo-mohedano",
    titleEs: "Quarzo Mohedano - Privacidad y Sofisticación",
    titleEn: "Quarzo Mohedano - Privacy and Sophistication",
    descriptionEs: "Un complejo residencial que ofrece la privacidad y el confort del hogar con el esplendor y la sofisticación de un club privado. Ubicado en la Avenida Mohedano, La Castellana, al pie de Cota Mil, con un terreno de 6,294 m². Techos de 3.40 metros de altura, amplios ventanales con luz natural, terrazas con jardineras.",
    descriptionEn: "A residential complex offering the privacy and comfort of home with the splendor and sophistication of a private club. Located on Avenida Mohedano, La Castellana, at the foot of Cota Mil, on a 6,294 m² site. 3.40-meter ceiling heights, large windows with natural light, terraces with planters.",
    type: "apartment",
    price: "Consultar",
    locationEs: "La Castellana, Caracas",
    locationEn: "La Castellana, Caracas",
    bedrooms: 3,
    bathrooms: 3,
    area: "6,294 m² terreno",
    featured: true,
    developer: "Grupo Binian",
    website: "https://www.quarzomohedano.com",
    images: [
      "/images/quarzo-mohedano/exterior-entrance.jpg",
      "/images/quarzo-mohedano/facade-full.jpg",
      "/images/quarzo-mohedano/entrance-detail.jpg",
      "/images/quarzo-mohedano/pool-terrace.jpg",
    ],
    featuresEs: ["Techos de 3.40 metros", "Atrios con jardín vertical", "Entrada con palmeras", "Seguridad y control de acceso", "Planta eléctrica completa", "Ascensor de carga", "Vistas al Ávila", "Madera, piedra natural, terracota"],
    featuresEn: ["3.40-meter ceilings", "Vertical garden atriums", "Palm-lined entrance", "Security and access control", "Full backup generator", "Freight elevator", "Avila Mountain views", "Wood, natural stone, terracotta"],
  },
  {
    id: "skypark-360",
    titleEs: "SkyPark 360 - Vivir en las Alturas",
    titleEn: "SkyPark 360 - Living at the Top",
    descriptionEs: "SkyPark 360 es una torre de uso mixto que redefine el skyline de Caracas. Con una fachada vibrante y contemporánea, piscina infinity en el rooftop con vistas panorámicas, gimnasio con vista al Ávila, skybridge peatonal, lobby de doble altura con diseño de hotel boutique, y amenidades de clase mundial.",
    descriptionEn: "SkyPark 360 is a mixed-use tower that redefines the Caracas skyline. Featuring a vibrant contemporary facade, rooftop infinity pool with panoramic views, gym overlooking the Avila, pedestrian skybridge, double-height boutique hotel-style lobby, and world-class amenities.",
    type: "apartment",
    price: "Consultar",
    locationEs: "Caracas, Venezuela",
    locationEn: "Caracas, Venezuela",
    bedrooms: 3,
    bathrooms: 3,
    area: "Consultar",
    featured: false,
    developer: "Consultar",
    website: "https://www.skypark360.com",
    images: [
      "/images/skypark-360/skypark-07.webp",
      "/images/skypark-360/skypark-20.webp",
      "/images/skypark-360/skypark-17.webp",
      "/images/skypark-360/skypark-14.webp",
      "/images/skypark-360/skypark-01.webp",
      "/images/skypark-360/skypark-04.webp",
    ],
    featuresEs: ["Piscina infinity en rooftop", "Gimnasio con vista al Ávila", "Skybridge peatonal", "Lobby de doble altura", "Fachada contemporánea con vegetación", "Vistas panorámicas 360°", "Uso mixto: residencial y comercial", "Ubicación premium en Caracas"],
    featuresEn: ["Rooftop infinity pool", "Gym with Avila views", "Pedestrian skybridge", "Double-height lobby", "Contemporary facade with greenery", "360-degree panoramic views", "Mixed-use: residential and commercial", "Premium Caracas location"],
  },
  {
    id: "promenade-18",
    titleEs: "Promenade 18 - Torres de Lujo",
    titleEn: "Promenade 18 - Luxury Towers",
    descriptionEs: "Promenade 18 es un impresionante proyecto de doble torre que redefine el lujo contemporáneo en Caracas. Su fachada combina revestimiento en madera y cobre con amplios ventanales de vidrio, creando una estética cálida y sofisticada.",
    descriptionEn: "Promenade 18 is a striking dual-tower project that redefines contemporary luxury in Caracas. Its facade combines warm wood and copper cladding with expansive glass windows, creating a warm and sophisticated aesthetic.",
    type: "apartment",
    price: "Consultar",
    locationEs: "Caracas, Venezuela",
    locationEn: "Caracas, Venezuela",
    bedrooms: 3,
    bathrooms: 2,
    area: "Consultar",
    featured: false,
    developer: "Consultar",
    website: "https://www.promenade18.com",
    images: [
      "/images/promenade-18/promenade-03.webp",
      "/images/promenade-18/promenade-07.webp",
      "/images/promenade-18/promenade-04.webp",
      "/images/promenade-18/promenade-10.webp",
      "/images/promenade-18/promenade-01.webp",
      "/images/promenade-18/promenade-05.webp",
    ],
    featuresEs: ["Doble torre residencial", "Fachada en madera y cobre", "Espacios comerciales en planta baja", "Vistas panorámicas al Ávila", "Acabados de primera calidad", "Amenidades exclusivas", "Ubicación privilegiada", "Seguridad 24/7"],
    featuresEn: ["Dual residential towers", "Wood and copper facade", "Ground-floor commercial spaces", "Panoramic Avila views", "Premium finishes", "Exclusive amenities", "Privileged location", "24/7 Security"],
  },
];

const testimonials = [
  {
    name: "María G.",
    locationEs: "Inversionista, Miami",
    locationEn: "Investor, Miami",
    textEs: "Grehyni nos ayudó a encontrar la propiedad perfecta en Caracas. Su conocimiento del mercado y dedicación son incomparables. Siempre disponible, siempre profesional.",
    textEn: "Grehyni helped us find the perfect property in Caracas. Her market knowledge and dedication are unmatched. Always available, always professional.",
  },
  {
    name: "Carlos R.",
    locationEs: "Comprador, Caracas",
    locationEn: "Buyer, Caracas",
    textEs: "La atención personalizada que recibimos fue excepcional. Grehyni transformó lo que podría haber sido un proceso complicado en una experiencia fluida y transparente.",
    textEn: "The personalized attention we received was exceptional. Grehyni transformed what could have been a complicated process into a smooth and transparent experience.",
  },
  {
    name: "Andrea M.",
    locationEs: "Inversionista, New York",
    locationEn: "Investor, New York",
    textEs: "Su experiencia con desarrollos de lujo en Miami se nota en cada recomendación. Confío plenamente en su criterio para inversiones inmobiliarias en Venezuela.",
    textEn: "Her experience with luxury developments in Miami shows in every recommendation. I fully trust her judgment for real estate investments in Venezuela.",
  },
];

async function migrate() {
  console.log("=== Migrating to Sanity CMS ===\n");

  // Site Settings
  console.log("Creating site settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    heroTitle: "Tu Futuro Comienza Aquí",
    heroTitleEn: "Your Future Starts Here",
    heroSubtitle: "Inversiones Inmobiliarias en Venezuela",
    heroSubtitleEn: "Real Estate Investment in Venezuela",
    phone: "+17865548738",
    email: "asefinancial@gmail.com",
    instagram: "https://www.instagram.com/grehynirealtor",
    facebook: "https://www.facebook.com/grehyninarvaezrealtors",
    youtube: "https://www.youtube.com/@grehyninarvaez489",
  });
  console.log("✓ Site settings created\n");

  // Testimonials
  console.log("Creating testimonials...");
  for (const t of testimonials) {
    await client.create({ _type: "testimonial", ...t });
    console.log(`  ✓ ${t.name}`);
  }
  console.log("");

  // Properties
  for (const prop of properties) {
    console.log(`Creating property: ${prop.titleEs}...`);

    // Upload images
    const imageAssets = [];
    for (const imgPath of prop.images) {
      const asset = await uploadImage(imgPath);
      if (asset) imageAssets.push(asset);
    }

    // Upload brochure if exists
    let brochureAsset = undefined;
    if (prop.brochure) {
      brochureAsset = await uploadFile(prop.brochure);
    }

    // Create document
    const doc = {
      _type: "property",
      slug: { _type: "slug", current: prop.id },
      titleEs: prop.titleEs,
      titleEn: prop.titleEn,
      descriptionEs: prop.descriptionEs,
      descriptionEn: prop.descriptionEn,
      type: prop.type,
      price: prop.price,
      locationEs: prop.locationEs,
      locationEn: prop.locationEn,
      bedrooms: prop.bedrooms,
      bathrooms: prop.bathrooms,
      area: prop.area,
      images: imageAssets,
      featuresEs: prop.featuresEs,
      featuresEn: prop.featuresEn,
      featured: prop.featured,
      developer: prop.developer,
      website: prop.website || undefined,
      brochure: brochureAsset || undefined,
    };

    await client.create(doc);
    console.log(`✓ Property created: ${prop.id}\n`);
  }

  console.log("=== Migration complete! ===");
}

migrate().catch(console.error);
