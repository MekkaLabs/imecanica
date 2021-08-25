import Link from 'next/link'
import Image from 'next/image'
import HubspotForm from 'react-hubspot-form'


export default function Footer() {
    return (
        <div className="relative bg-black">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-black"></div>
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-extrabold tracking-tight text-red-600 sm:text-3xl">
                            Fale Conosco
                        </h2>
                        <p className="mt-3 text-lg leading-6 text-white">
                            Disponibilizamos diversos canais de atendimento.
                        </p>
                        <dl className="mt-8 text-base text-gray-500">

                            <div id="botao-whatsapp-2" className="mt-6">
                                <dt className="sr-only">Whatsapp</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/whatsapp.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="https://wa.me/556199971996">
                                        <a>
                                            <span className="ml-3 text-white">
                                                +55 (61) 99997-1996
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                            <div id="botao-instagram-2" className="mt-3">
                                <dt className="sr-only">Instagram</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/instagram.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="https://www.instagram.com/imec.bsb/">
                                        <a>
                                            <span className="ml-3 text-white">
                                                imec.bsb
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                            <div id="botao-facebook" className="mt-3">
                                <dt className="sr-only">Facebook</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/facebook.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="https://www.facebook.com/imecbsb">
                                        <a>
                                            <span className="ml-3 text-white">
                                                imecbsb
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/email.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="mailto:contato@imecaninca.com.br">
                                        <a>
                                            <span className="ml-3 text-white">
                                                contato@imecaninca.com.br
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                        </dl>
                        <div className="mt-6 text-base text-gray-500">
                            <p>iMEC – Oficina Móvel
                                CNPJ: 34.037.131/0001-65</p>
                        </div>
                    </div>
                </div>
                <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">

                    <div className="max-w-lg mx-auto lg:max-w-none bg-white p-8 rounded-lg">

                        <div className="rounded-lg sm:overflow-hidden">
                            <div className="px-2 py-2 sm:px-10">
                                <div>
                                    <div className="mt-1 grid grid-cols-3 gap-3">
                                        <div id="botao-telefone-2">
                                            <div className="transform hover:scale-110 motion-reduce:transform-none duration-700">
                                                <Link href="tel:+5561999971996">
                                                    <a
                                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
                                                    >
                                                        <span className="sr-only">Telefone para a Imec</span>
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
                                        <div id="botao-whatsapp-3" className="transform hover:scale-110 motion-reduce:transform-none duration-700">
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
                                        <div id="botao-instagram-3" className="transform hover:scale-110 motion-reduce:transform-none duration-700">
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
        </div >
    )
}