import Image from "next/image"

const About = () => {
  return (
    <section
      className="container max-w-6xl px-20 py-20 flex flex-row justify-between"
    >
      <div>
        <Image
          src='https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          width={350}
          height={350}
          alt='about us'
          className="rounded-xl"
        />
      </div>
      <div
        className="max-w-md space-y-8"
      >
        <h2 className="text-7xl">¿Quien soy?</h2>
        <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste amet numquam cum hic consectetur qui, quidem saepe ipsam assumenda alias corrupti asperiores animi necessitatibus, blanditiis nemo voluptate nobis dolorem? Magnam nemo a tenetur impedit perspiciatis veniam in beatae. Et.</p>
      </div>
    </section>
  )
}

export default About