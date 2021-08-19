import Image from 'next/image'

export default function Marcas() {
    return (
        <div className="bg-red-700 py-24">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className=" text-4xl font-extrabold text-white text-center pb-10">Atendemos as principais marcas do mercado</h2>
                <div className="flow-root mt-8 lg:mt-10">
                    <div className="-mt-4 -ml-8 flex flex-wrap gap-12 justify-between lg:-ml-4">
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/audi-logo.svg"
                                width={100}
                                height={100}
                                alt="Mirage" />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/bmw-logo.svg"
                                width={100}
                                height={100}
                                alt="Mirage" />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/fiat-logo.svg"
                                width={100}
                                height={100}
                                alt="StaticKit"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/ford-logo.svg"
                                width={100}
                                height={100}
                                alt="Transistor"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/hyundai-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/chevrolet-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/honda-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/mitsubish-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/toyota-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/peugeot-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/nissan-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/volkswagen-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/jeep-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 transform hover:scale-110 motion-reduce:transform-none duration-1000">
                            <Image
                                className="h-12"
                                src="/renault-logo.svg"
                                width={100}
                                height={100}
                                alt="Workcation"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}