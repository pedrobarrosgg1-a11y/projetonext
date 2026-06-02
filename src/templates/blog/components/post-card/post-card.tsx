import Link from "next/link";
import Image from "next/image";

export const PostCard = () => {
  return (
    <Link
      href={"/blog"}
      className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs text-gray-300 bg-gray-600 ">
              20/12/26
            </span>
          </div>
          <Image
            src={"assets/primeiro-post.svg"}
            alt="Homem concentrado trabalhando no notebook em uma mesa com suculenta, em ambiente azul moderno."
            width={288}
            height={144}
            className="text-gray-100 w-full h-40 object-cover object-center "
          />
        </div>

        {/* Post Info */}
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">Transformando seu negócio em uma loja virtual</h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site.Set...
          </p>

          {/* Footer do Post*/}
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative w-5 h-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border-[1px]">
              <Image
                src={"assets/aspen-dokidis.svg"}
                alt="Imagem da Aspen Dokidis"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <span className="text-body-sm text-gray-300">Aspen Dokidis</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
