import Image from "next/image"

const TestimonialCard = () => (
  <div
    className="bg-gray-100 p-10 rounded-xl space-y-4 w-full"
    id='testimoniales'
  >
    <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum non ratione, fugiat earum ab, officia repellendus dolor hic id nam doloremque iure tempore velit aut atque officiis maxime. Quisquam dolor omnis facere quo quam quis optio possimus maiores consequatur? Nobis.&ldquo;</p>
    <div
      className="flex items-center space-x-4"
    >
      <Image
        src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        width={50}
        height={50}
        alt='avatar'
        className="rounded-full h-10 w-10 object-cover"
      />
      <p>Nombre falso</p>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section
      className="container max-w-6xl p-20 flex space-y-16 flex-col"
    >
      <h2 className="text-7xl">Nuestros clientes</h2>
      <div
        className="grid grid-cols-3 gap-8"
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  )
}

export default Testimonials

