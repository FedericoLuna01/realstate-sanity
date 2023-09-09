import { createClient, groq } from "next-sanity";

export async function getListings() {
  const client = createClient({
    projectId: 'a2bretwk',
    dataset: 'production',
    apiVersion: '2023-09-09',
  })

  return client.fetch(
    groq`*[_type == 'listing']{
      _id,
      name,
      price,
      direction,
      "imageUrl": image.asset->url
    }`
  )
}