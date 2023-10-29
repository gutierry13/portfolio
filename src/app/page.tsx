export default function Home() {
  return (
    <main className="absolute bottom-1/2 translate-y-1/2 flex flex-col items-center justify-center max-w-7xl w-full ">
      <section className=" max-w-xl w-full text-center">
        <div className="image"></div>
        <div className="text">
          <h1 className="title">Olá, meu nome é Alexandre Gutierry</h1>
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
