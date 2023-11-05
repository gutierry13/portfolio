// export const githubProjects = fetch(
//   'https://api.github.com/users/gutierry13/repos',
// )
//   .then((data) => data.json())
//   .then((resp) =>
//     resp.map((project) => ({
//       id: project.id,
//       title: project.name,
//       url: project.html_url,
//       description: project.description,
//     })),
//   )
export const myProjects = [
  {
    id: 1,
    name: 'Website',
    description: 'Website using NextJS',
    tech: ['NextJS', 'TailwindCSS'],
    stack: ['Frontend'],
    image: '40-29-23-174000.png',
  },
  {
    id: 2,
    name: 'Marketplace',
    description: 'A modern marketplace using ReactJS and NodeJS',
    tech: ['ReactJS', 'NodeJS', 'Stytled Components', 'MySQL'],
    stack: ['Full Stack'],
    image: '40-29-23-174000.png',
  },
  {
    id: 3,
    name: 'Movie Theather',
    description: 'A modern movie theather using ReactJS and NodeJS',
    tech: ['ReactJS', 'NodeJS', 'Stytled Components', 'MySQL'],
    stack: ['Full Stack'],
    image: '40-29-23-174000.png',
  },
]
