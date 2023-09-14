import { getListings } from "@/sanity/sanity-utils"
import ListingCard from "@/components/listing-card"
import { type Listing } from "@/types/types"

export const revalidate = 60

const CasasPage = async () => {
  const listings: Listing[] = await getListings()
  return (
    <section className="container max-w-6xl px-20 py-20 flex flex-col justify-between">
      <h1 className="text-9xl">Casas</h1>
      <div
        className="grid grid-cols-2 gap-8"
      >
        {
          listings && listings.map((listing) => (
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
    </section>
  )
}

export default CasasPage