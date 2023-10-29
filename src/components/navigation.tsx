import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex ">
      <ul>
        <li>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="./portifolio">Portifolio</Link>
        </li>
      </ul>
    </div>
  )
}
