interface ProjectParams {
  params: {
    id: string
  }
}
export default function Project({ params }: ProjectParams) {
  console.log(params)
  return (
    <div>
      <h1>Project {params.id}</h1>
    </div>
  )
}
