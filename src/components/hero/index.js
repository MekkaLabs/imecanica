import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import HubspotForm from 'react-hubspot-form'

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
                <div>
                    <div className="relative pt-2 pb-2 sm:pb-24">

                        <main className="mt-2 sm:mt-8">
                            <div className="mx-auto max-w-7xl">
                                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                                    <div className="px-2 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                        <div className="px-4 sm:px-2">
                                            <Link href="#">
                                                <a>
                                                    <Image
                                                        src="/logo-imec-white.png"
                                                        width={150}
                                                        height={150}
                                                        alt="logo-imec"
                                                    />
                                                </a>
                                            </Link>
                                            <div id="botao-fale-conosco">
                                                <Link href="https://wa.me/556199971996">
                                                    <a
                                                        className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 transform hover:scale-105 motion-reduce:transform-none duration-1000"
                                                    >
                                                        <span className="px-3 py-0.5 text-white text-lg font-semibold leading-5 uppercase tracking-wide bg-red-700 rounded-full">
                                                            Sem tempo para ir a Oficina?
                                                        </span>
                                                        <span className="ml-4 text-lg">FALE COM A IMEC</span>
                                                        <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                                <span className="md:block transform hover:scale-105 motion-reduce:transform-none duration-1000">Fa??a a revis??o do seu carro</span>{' '}
                                                <span className="text-black md:block transform hover:scale-105 motion-reduce:transform-none duration-1000">Onde e quando voc?? quiser</span>
                                            </h1>
                                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                                Somos uma oficina mec??nica m??vel especializada em revis??es peri??dicas e preventivas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                        <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                                            <div className="px-4 py-8 sm:px-10">
                                                <div>
                                                    <p className="text-lg font-bold text-red-600 text-center">Fale Conosco</p>
                                                    <div className="mt-1 grid grid-cols-3 gap-3">
                                                        <div>
                                                            <div className="transform hover:scale-110 motion-reduce:transform-none duration-700">
                                                                <Link href="tel:+5561999971996">
                                                                    <a id="botao-telefone"
                                                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
                                                                    >
                                                                        <span className="sr-only">Telefone</span>
                                                                        <Image
                                                                            className="px-2"
                                                                            src="/telefone-imec.svg"
                                                                            width={30}
                                                                            height={30}
                                                                            alt="Mirage" />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div id="botao-whatsapp-1" className="transform hover:scale-110 motion-reduce:transform-none duration-700">
                                                            <Link href="https://wa.me/556199971996">
                                                                <a
                                                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                >
                                                                    <span className="sr-only">Via WhatsApp</span>
                                                                    <Image
                                                                        className="px-2"
                                                                        src="/whatsapp.svg"
                                                                        width={30}
                                                                        height={30}
                                                                        alt="Mirage" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div id="botao-instagram-1" className="transform hover:scale-110 motion-reduce:transform-none duration-700">
                                                            <Link href="https://www.instagram.com/imec.bsb/">
                                                                <a
                                                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                >
                                                                    <span className="sr-only">Siga no Instagram</span>
                                                                    <Image
                                                                        className="px-2"
                                                                        src="/instagram.svg"
                                                                        width={30}
                                                                        height={30}
                                                                        alt="Mirage" />
                                                                </a>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mt-6 relative">
                                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                        <div className="w-full border-t border-gray-300 pb-8" />
                                                    </div>
                                                    <div className="relative flex justify-center text-sm">
                                                        <span className="px-2 bg-white text-gray-500 pb-8">Ou</span>
                                                    </div>
                                                </div>
                                                <div className="max-w-lg mx-auto lg:max-w-none">
                                                    <HubspotForm
                                                        portalId='8835199'
                                                        formId='e57f29b0-1d61-4978-a1a8-08cb847070b2'
                                                        loading={<div>Loading...</div>}
                                                    />
                                                </div>
                                            </div>
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
