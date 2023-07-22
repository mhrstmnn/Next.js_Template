import Package from '../../package.json'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-8">
      <p className="mb-0 font-light leading-relaxed">
        Version: {Package.version}
        <br />
        Theme: <ThemeToggle />
        <br />
        <br />
        &copy; {new Date().getFullYear()}{' '}
        <Link href="https://links.hrstmnn.de" target="_blank">
          Michael Horstmann
        </Link>
        <br />
        <Link href="https://hrstmnn.de/impressum" target="_blank">
          Impressum
        </Link>{' '}
        und{' '}
        <Link href="https://hrstmnn.de/datenschutz" target="_blank">
          Datenschutz
        </Link>
      </p>
    </footer>
  )
}
