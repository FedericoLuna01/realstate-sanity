import Image from "next/image"

interface ListingCardProps {
  image: string
  name: string
  price: string
  direction: string
}

const ListingCard: React.FC<ListingCardProps> = ({
  image,
  name,
  price,
  direction
}) => {
  return (
    <div className="w-full space-y-3 group cursor-pointer">
      <div
        className="relative w-full aspect-square rounded-3xl group-hover:brightness-75 transition duration-300"
      >
        <Image
          src={image}
          fill
          className="rounded-3xl object-cover aspect-square"
          alt='house'
        />
      </div>
      <div>
        <div
          className="flex justify-between items-center"
        >
          <p className="text-3xl">{name}</p>
          <p className="text-xl">${price}</p>
        </div>
        <p className="text-xl text-gray-600">{direction}</p>
      </div>
    </div>
  )
}

export default ListingCard