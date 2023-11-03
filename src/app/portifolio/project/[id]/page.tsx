import { myProjects } from '@/lib/info'
import Image from 'next/image'

interface ProjectParams {
  params: {
    id: string
  }
}
export default function Project({ params }: ProjectParams) {
  const project = myProjects.filter(
    (project) => project.id === Number(params.id),
  )[0]
  return (
    <section className="  w-full flex  items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-2">
        <h1 className="text-4xl font-semibold mb-4">{project.name}</h1>
        <Image
          src={`/${project.image}`}
          alt={project.name}
          width={896}
          height={400}
        />
        <p className="text-xl font-semibold ">{`subtitle`}</p>
        <p>
          {project.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis, quaerat vero unde impedit reiciendis nostrum
          placeat nihil vel doloremque enim recusandae nam, explicabo itaque,
          magnam fugiat sit sequi repudiandae est?
        </p>
        <div>
          Tecnologias usadas no projeto:
          {project.tech.map((tech) => (
            <p className="mt-1" key={tech}>
              {tech}
            </p>
          ))}
        </div>

        <p>Stack: {project.stack}</p>
        <footer>Prev and Next</footer>
      </div>
    </section>
  )
}
