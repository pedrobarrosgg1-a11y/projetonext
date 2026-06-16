import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" title="Pagina inicial" className="transition-all duration-300 hover:scale-105">
            <Image 
            src="/logo.svg" 
            alt="Logo site" 
            width={116} 
            height={32} />
          </Link>
    )
}