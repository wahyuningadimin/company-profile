import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <p className="font-bold text-3xl"><Link href={'/'}></Link></p>
<svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about-us'}>About Us</Link></li>
        <li><Link href={'/products'}>Products</Link></li>
        <li><Link href={'/our-team'}>Our Team</Link></li>
        <li><Link href={'/contact-us'}>Contact Us</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-3xl"><Link href={'/'}>H&H</Link></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about-us'}>About Us</Link></li>
        <li><Link href={'/products'}>Products</Link></li>
        <li><Link href={'/our-team'}>Our Team</Link></li>
        <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </ul>
  </div>
</div>

 )
}


