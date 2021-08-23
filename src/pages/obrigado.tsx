
import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {
    return (
        <div className="relative bg-red-500">
            <div className="absolute inset-0">
                <Image
                    className="w-full h-full object-cover"
                    src="/imecanica-oficina-movel-2.jpg"
                    layout="fill"
                    alt=""
                />
                <div className="absolute inset-0 bg-red-600 mix-blend-multiply" aria-hidden="true" />
            </div>

            <div className="relative pt-2 pb-2 sm:pb-24">
                <main className="sm:mt-24 ">
                    <Link href="#" >
                        <a>
                            <Image
                                className="transform hover:scale-105 hover:translate-x-2 motion-reduce:transform-none duration-1000"
                                src="/logo-imec-white.png"
                                width={200}
                                height={200}
                                alt="Imecanica"
                            />
                        </a>
                    </Link>
                    <div className="p-12">
                        <h1 className="text-4xl font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                            <span className="md:block transform hover:scale-105 hover:translate-x-8 motion-reduce:transform-none duration-1000">Obrigado Por seu Contato</span>{' '}
                        </h1>
                        <p className="mt-3 text-base text-white pb-64 sm:pb-20 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl transform hover:scale-105 hover:translate-x-8 motion-reduce:transform-none duration-1000">
                            Em breve um de nossos colaboradores irá entrar em contato contigo.
                        </p>
                    </div>
                </main>
            </div>
        </div >
    )
}
