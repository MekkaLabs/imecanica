import { Popover } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative bg-red-500 h-full-screen">

            <div className="absolute inset-0">
                <Image
                    className="w-full h-full object-cover"
                    src="/imecanica-oficina-movel-2.jpg"
                    layout="fill"
                    alt=""
                />
                <div className="absolute inset-0 bg-red-600 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
                <svg
                    className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-red-900 lg:top-0 lg:mt-16 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div>
            <div>
                <div className="relative mx-auto py-2 px-4 sm:py-6 sm:px-6 lg:px-8">
                    <div className="relative pt-2 pb-2 sm:pb-24">
                        <Popover>
                            <nav
                                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 "
                                aria-label="Global"
                            >
                                <div className="flex items-center flex-1 pb-24 lg:pb-0">
                                    <div className="flex items-center justify-between w-full md:w-auto ">
                                        <div className="h-8 w-auto sm:h-10 ">
                                            <Link href="#">
                                                <a>
                                                    <Image
                                                        src="/logo-imec-white.png"
                                                        width={200}
                                                        height={200}
                                                        alt=""
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </Popover>
                        <main className="mt-16 sm:mt-24">
                            <div className="mx-auto max-w-7xl">
                                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                    <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                        <div>
                                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                                <span className="md:block transform hover:scale-105 motion-reduce:transform-none duration-1000">Obrigado Por seu Contato</span>{' '}

                                            </h1>
                                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                                Em breve um de nossos colaboradores irão entrar em contato contigo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div >
    )
}
