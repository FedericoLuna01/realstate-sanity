import ListingCard from "@/components/listing-card"
import Link from "next/link"

const Listings = () => {
  return (
    <section
      className="container max-w-6xl p-20 flex space-y-16 flex-col"
    >
      <h2 className="text-7xl">Propiedades destacadas</h2>
      <div
        className="grid grid-cols-2 gap-10"
      >
        <ListingCard
          name='casa en la playa'
          price='$100000'
          direction='esto es una direccion 123123'
          image='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'
        />
        <ListingCard
          name='est oes un acasa'
          price='$5345432'
          direction='direccion galda 123123'
          image='https://images.unsplash.com/photo-1665061580844-f4bb15772ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        />
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