import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h2 className="mt-8">Nicht gefunden</h2>
      <p>
        Diese Seite existiert nicht
        <br />
        <Link href="/">Zurück zur Startseite</Link>
      </p>
    </>
  )
}
