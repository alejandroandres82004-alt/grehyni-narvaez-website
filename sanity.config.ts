import { defineConfig, defineField, defineType } from "sanity";
import { structureTool } from "sanity/structure";

const property = defineType({
  name: "property",
  title: "Propiedades",
  type: "document",
  fields: [
    defineField({
      name: "titleEs",
      title: "Nombre del Proyecto",
      type: "string",
      description: "Nombre en español (ej: Alma Wellness - Residencias de Lujo)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Project Name (English)",
      type: "string",
      description: "Name in English",
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      description: "Se genera automáticamente del nombre. Click 'Generate' después de escribir el nombre.",
      options: { source: "titleEs", maxLength: 96 },
    }),
    defineField({
      name: "featured",
      title: "Mostrar en Página Principal",
      type: "boolean",
      description: "Activar para que aparezca en la sección de propiedades destacadas",
      initialValue: false,
    }),
    defineField({
      name: "type",
      title: "Tipo de Propiedad",
      type: "string",
      options: {
        list: [
          { title: "Apartamento", value: "apartment" },
          { title: "Casa", value: "house" },
          { title: "Comercial", value: "commercial" },
          { title: "Terreno", value: "land" },
        ],
        layout: "radio",
      },
      initialValue: "apartment",
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "string",
      description: 'Ej: "$185,000" o "Desde $120,000" o "Consultar"',
      initialValue: "Consultar",
    }),
    defineField({
      name: "locationEs",
      title: "Ubicación",
      type: "string",
      description: "Ej: Las Mercedes, Caracas",
    }),
    defineField({
      name: "locationEn",
      title: "Location (English)",
      type: "string",
    }),
    defineField({
      name: "bedrooms",
      title: "Habitaciones",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "bathrooms",
      title: "Baños",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "area",
      title: "Área (m²)",
      type: "string",
      description: 'Ej: "120" o "40 - 141" o "Consultar"',
    }),
    defineField({
      name: "descriptionEs",
      title: "Descripción",
      type: "text",
      rows: 5,
      description: "Descripción completa del proyecto en español",
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "images",
      title: "Imágenes del Proyecto",
      type: "array",
      description: "Arrastra para reordenar. La primera imagen es la portada.",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "featuresEs",
      title: "Características",
      type: "array",
      description: "Lista de amenidades y características en español",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featuresEn",
      title: "Features (English)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "developer",
      title: "Desarrollador",
      type: "string",
      description: "Ej: Grupo Binian",
    }),
    defineField({
      name: "website",
      title: "Website del Proyecto",
      type: "url",
      description: "URL completa (ej: https://www.almacaracas.com)",
    }),
    defineField({
      name: "brochure",
      title: "Brochure PDF",
      type: "file",
      description: "Sube el PDF del brochure del proyecto",
    }),
  ],
  preview: {
    select: { title: "titleEs", subtitle: "locationEs", media: "images.0" },
  },
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Cliente",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "locationEs",
      title: "Ubicación / Rol",
      type: "string",
      description: "Ej: Inversionista, Miami",
    }),
    defineField({
      name: "locationEn",
      title: "Location / Role (English)",
      type: "string",
    }),
    defineField({
      name: "textEs",
      title: "Testimonio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "textEn",
      title: "Testimonial (English)",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "locationEs" },
  },
});

const instagramPost = defineType({
  name: "instagramPost",
  title: "Posts de Instagram",
  type: "document",
  fields: [
    defineField({
      name: "url",
      title: "URL del Post",
      type: "url",
      description: "Pega la URL completa del post (ej: https://www.instagram.com/p/ABC123/)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEs",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "titleEn",
      title: "Title (English)",
      type: "string",
    }),
    defineField({
      name: "descriptionEs",
      title: "Descripción corta",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "descriptionEn",
      title: "Short description (English)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "thumbnail",
      title: "Imagen de Portada",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "titleEs", media: "thumbnail" },
  },
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Título Principal (Español)",
      type: "string",
      description: "El título grande en la página de inicio",
    }),
    defineField({
      name: "heroTitleEn",
      title: "Main Title (English)",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo (Español)",
      type: "string",
    }),
    defineField({
      name: "heroSubtitleEn",
      title: "Subtitle (English)",
      type: "string",
    }),
    defineField({
      name: "statProjects",
      title: "Número de Proyectos",
      type: "string",
      description: 'Se muestra en la sección de estadísticas (ej: "5" o "50+")',
      initialValue: "5",
    }),
    defineField({
      name: "statClients",
      title: "Número de Clientes",
      type: "string",
      description: 'Ej: "200+"',
      initialValue: "200+",
    }),
    defineField({
      name: "statYears",
      title: "Años de Experiencia",
      type: "string",
      description: 'Ej: "10+"',
      initialValue: "10+",
    }),
    defineField({
      name: "statCities",
      title: "Número de Ciudades",
      type: "string",
      description: 'Ej: "3"',
      initialValue: "3",
    }),
    defineField({
      name: "phone",
      title: "Teléfono / WhatsApp",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configuración del Sitio" }),
  },
});

export default defineConfig({
  name: "grehyni-narvaez",
  title: "Grehyni Narvaez Venezuela",
  projectId: "zgtjgkvi",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Propiedades")
              .schemaType("property")
              .child(S.documentTypeList("property").title("Propiedades")),
            S.listItem()
              .title("Testimonios")
              .schemaType("testimonial")
              .child(S.documentTypeList("testimonial").title("Testimonios")),
            S.listItem()
              .title("Posts de Instagram")
              .schemaType("instagramPost")
              .child(S.documentTypeList("instagramPost").title("Posts de Instagram")),
            S.divider(),
            S.listItem()
              .title("Configuración del Sitio")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
  ],
  schema: {
    types: [property, testimonial, instagramPost, siteSettings],
  },
});
