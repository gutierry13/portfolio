import Link from 'next/link'
import Image from 'next/image'
import { myProjects } from '@/lib/info'

export default async function Portifolio() {
  const projects = myProjects
  return (
    <section>
      <h1 className="title text-center">Recent Works</h1>
      <nav className="flex items-center justify-center gap-3 mt-3 ">
        <p className="typeNav">All</p>
        <p className="typeNav">Front End</p>
        <p className="typeNav">Back End</p>
        <p className="typeNav">Mobile</p>
      </nav>
      <div className="flex flex-wrap justify-space-around items-center gap-8 mt-6">
        {projects.map((project) => (
          <Link
            className="hover:scale-110 hover:shadow-2xl hoover:shadow-black hover:opacity-95 transition-all duration-300"
            key={`${project.id}`}
            href={`portifolio/project/${project.id}`}
          >
            <Image
              src={`/${project.image}`}
              alt={project.name}
              width={400}
              height={200}
            />
            <p className="text-center text-xl mt-2 ">{project.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
