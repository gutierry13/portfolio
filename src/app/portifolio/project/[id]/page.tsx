import { myProjects } from '@/lib/info'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectParams {
  params: {
    id: string
  }
}
export default function Project({ params }: ProjectParams) {
  function selecProject(index: number) {
    return myProjects.filter((project) => project.id === index)[0]
  }
  const prevProject = selecProject(Number(params.id) - 1)
  console.log(prevProject)
  const nextProject = selecProject(Number(params.id) + 1)
  console.log(nextProject)
  const project = selecProject(Number(params.id))
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
        <footer className="flex justify-between mt-7 mb-6 ">
          {prevProject ? (
            <div className="flex flex-col gap-3">
              <Image
                src={`/${prevProject.image}`}
                width={120}
                height={120}
                alt=""
              />
              <Link href={`./${prevProject.id}`}>Prev</Link>
            </div>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <div className="flex flex-col gap-3">
              <Image
                src={`/${nextProject.image}`}
                width={120}
                height={120}
                alt=""
              />
              <Link href={`./${nextProject.id}`}>Next</Link>
            </div>
          ) : (
            <div></div>
          )}
        </footer>
      </div>
    </section>
  )
}
