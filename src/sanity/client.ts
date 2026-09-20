import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

export const sanityClient = createClient({
  ...sanityConfig,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

export const isSanityConfigured = () => !!sanityConfig.projectId;
