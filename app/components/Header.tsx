import Link from 'next/link'
import variables from '../stylesheets/variables.module.sass'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="mb-5" style={{ color: variables.primaryColor }}>
          Next.js Starter
        </h1>
      </Link>
    </header>
  )
}
