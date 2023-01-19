import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="text-center mt-5">
        <div className="Logo text-center">
          <Image src="/logo.png" width={128} height={77}></Image>
        </div>
        <div className="mt-4 ">
          <Link href="/" className="px-2 h5">
            Home
          </Link>
          <Link href="/about" className="px-2 h5">
            About
          </Link>
          <Link href="/resource" className="px-2 h5">
            Resource
          </Link>
          <Link href="/resource/quote" className="px-2 h5">
            Useful Quotes
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
