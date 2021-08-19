
import Image from 'next/image'
import Oil from '../../../public/icons-oil.png'
import Scanner from '../../../public/icons-scanner.png'
import Horario from '../../../public/icons-24h.png'


export default function Teste1() {
    return (
        <div className="bg-black">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl transform hover:scale-105 motion-reduce:transform-none duration-1000">Economize tempo e dinheiro com nossos serviços exclusivos.</h2>
                        <p className="text-xl text-gray-500 transform hover:scale-105 motion-reduce:transform-none duration-1000">Tudo com muita responsabilidade, compromisso, honestidade, ética, inovação e no conforto da sua casa.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                            <li>
                                <div className="flex items-center space-x-4 lg:space-x-6 transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                    <Image
                                        className="h12"
                                        src={Oil}
                                        alt="Troca-de-oleo"
                                        width={100}
                                        height={100} />
                                    <div className="font-black text-red-600 text-xl leading-6 space-y-1">
                                        <h3>Revisão Completa</h3>
                                        <p className="text-lg font-medium text-gray-500">
                                            Troca de Filtros e Óleo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-4 lg:space-x-6 transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                    <Image
                                        className="h12"
                                        src={Oil}
                                        alt="Troca-de-oleo"
                                        width={100}
                                        height={100} />
                                    <div className="font-black text-red-600 text-xl leading-6 space-y-1">
                                        <h3>Checagem de 20 itens</h3>
                                        <p className="text-lg font-medium text-gray-500">
                                            Troca de Filtros e Óleo do Motor.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-4 lg:space-x-6 transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                    <Image
                                        className="h12"
                                        src={Horario}
                                        alt="Troca-de-oleo"
                                        width={100}
                                        height={100} />
                                    <div className="font-black text-red-600 text-xl leading-6 space-y-1">
                                        <h3>Troca de Bateria</h3>
                                        <p className="text-lg font-medium text-gray-500">
                                            Troca de Filtros e Óleo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-4 lg:space-x-6 transform hover:scale-105 motion-reduce:transform-none duration-1000">
                                    <Image
                                        className="h12"
                                        src={Scanner}
                                        alt="Troca-de-oleo"
                                        width={100}
                                        height={100} />
                                    <div className="font-black text-red-600 text-xl leading-6 space-y-1">
                                        <h3>Em menos de 1 hora</h3>
                                        <p className="text-lg font-medium text-gray-500">
                                            Revisão do seu veiculo com rapidez.
                                        </p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
