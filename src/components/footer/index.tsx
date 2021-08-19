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

                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/whatsapp.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="https://wa.me/5561981793222">
                                        <a>
                                            <span className="ml-3 text-white">
                                                +55 (61) 98179-3222
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                            <div className="mt-3">
                                <dt className="sr-only">Instagram</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/instagram.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="mailto:support@example.com">
                                        <a>
                                            <span className="ml-3 text-white">
                                                imec.bsb
                                            </span>
                                        </a>
                                    </Link>
                                </dd>
                            </div>

                            <div className="mt-3">
                                <dt className="sr-only">Facebook</dt>
                                <dd className="flex">
                                    <Image
                                        className="px-2"
                                        src="/facebook.svg"
                                        width={30}
                                        height={30}
                                        alt="Mirage" />
                                    <Link href="mailto:support@example.com">
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
                                    <Link href="mailto:support@example.com">
                                        <a>
                                            <span className="ml-3 text-white">
                                                support@example.com
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

                    <div className="max-w-lg mx-auto lg:max-w-none bg-white p-12">
                        <HubspotForm
                            portalId='8835199'
                            formId='e57f29b0-1d61-4978-a1a8-08cb847070b2'
                            onSubmit={() => console.log('Submit!')}
                            onReady={(form) => console.log('Form ready!')}
                            loading={<div>Loading...</div>}
                        />
                    </div>

                </div>
            </div>
        </div >
    )
}