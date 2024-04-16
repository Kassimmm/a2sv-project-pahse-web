import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo blogs'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Dojo Blog</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Blogs</Link>
    </nav>
  )
}