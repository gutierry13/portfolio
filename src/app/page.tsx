export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <section className="relative mt-40 max-w-xl w-full text-center">
        <div className="image"></div>
        <div className="text">
          <h1 className="text-gray-100 text-3xl ">
            Olá, meu nome é Alexandre Gutierry
          </h1>
          <p className="opacity-80">
            Eu sou um desenvolvedor Full Stack JavasScript apaixonado por
            tecnologia e programação
          </p>
        </div>
        <div>
          <h2 className="text-gray-100 text-xl mb-2 ">Minhas tecnologias</h2>
          <div className="opacity-80 flex items-center justify-center gap-4 ">
            <span className="skill">JavaScript</span>
            <span className="skill">TypeScript</span>
            <span className="skill">ReactJs</span>
            <span className="skill">NodeJs</span>
            <span className="skill">React Native</span>
            <span className="skill">MySQL</span>
          </div>
        </div>
      </section>
    </main>
  )
}
