import Link from "next/link"

import { getListings } from "@/sanity/sanity-utils"
import ListingCard from "@/components/listing-card"
import { type Listing } from "@/types/types"

export const revalidate = 60

const Listings = async () => {
  const listings: Listing[] = await getListings()
  const listignsToDisplay = listings.slice(0, 2)
  return (
    <section
      className="container max-w-6xl p-20 flex space-y-16 flex-col"
    >
      <h2 className="text-7xl">Propiedades destacadas</h2>
      <div
        className="grid grid-cols-2 gap-10"
      >
        {
          listignsToDisplay.map((listing) => (
            <ListingCard
              key={listing._id}
              name={listing.name}
              price={listing.price}
              direction={listing.direction}
              image={listing.imageUrl}
            />
          ))
        }
      </div>
      <Link
        href='/casas'
        className='text-3xl text-gray-500 hover:text-black transition duration-300'
      >
        Ver más →
      </Link>
    </section>
  )
}

export default Listings