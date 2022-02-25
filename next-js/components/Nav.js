import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.topnav}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
    </div>
  )
}

export default Nav 