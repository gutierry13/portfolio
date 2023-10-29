import Link from 'next/link'
import websiteImg from '../../assets/40-29-23-174000.png'
import Image from 'next/image'
const projects = [
  {
    id: 1,
    title: 'Website',
    description: 'Descrição do projeto',
    image: websiteImg,
  },
]
const github = fetch('https://api.github.com/users/gutierry13/repos')
console.log(github)
export default function Portifolio() {
  return (
    <section>
      <h1 className="title text-center">Recent Works</h1>
      <nav className="flex items-center justify-center gap-3 mt-3 ">
        <p className="typeNav">All</p>
        <p className="typeNav">Front End</p>
        <p className="typeNav">Back End</p>
        <p className="typeNav">Mobile</p>
      </nav>
      <div className="flex flex-wrap justify-space-around items-center">
        {projects.map((project) => (
          <Link key={project.id} href={project.title}>
            <Image src={project.image} alt={project.title} width={400} />
            <p className="text-center">{project.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
