import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center flex-col space-y-10 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
      <p className="text-2xl">Encontrá tu casa</p>
      <h1 className="text-9xl">Real state</h1>
      <Button
        variant='rounded'
      >
        Mirar casas
      </Button>
    </section>
  )
}

export default Hero