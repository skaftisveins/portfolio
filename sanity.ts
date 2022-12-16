import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  // apiVersion: '2022-12-15',
  useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
