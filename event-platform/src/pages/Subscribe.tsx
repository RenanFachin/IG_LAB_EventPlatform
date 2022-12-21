import HomeImage from '../assets/code-mockup.png'
import ReactIcon from '../assets/ReactJS icon.png'
import { Logo } from '../components/Logo'

export function Subscribe(){
    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">

            <img
            src={ReactIcon}
            className="mt-10 absolute"
            alt=""
            />

            <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
                <div className='max-w-[640px]'>
                    <Logo />

                    <h1 className='mt-8 text-[2.5rem] leading-tight'>
                        Construa uma <strong className='home_style'>aplicação completa</strong>, do zero, com <strong className='home_style'>React</strong>
                    </h1>

                    <p className='mt-4 text-gray-200 leading-relaxed'>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
                    <strong className="text-2xl block mb-6">
                        Inscreva-se gratuitamente
                    </strong>

                    {/* obs: o form, por padrão, não ocupa 100% da width. Por isso o w-full */}
                    <form action="" className='flex flex-col gap-2 w-full'>

                    <input 
                        className='bg-gray-900 rounded px-5 h-14'
                        type="text" 
                        placeholder='Seu nome completo'
                    />

                    <input 
                        className='bg-gray-900 rounded px-5 h-14'
                        type="email" 
                        placeholder='Digite o seu email'
                    />

                    <button 
                        className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors'
                        type='submit'
                    >
                        Garantir minha vaga
                    </button>

                    </form>

                </div>
            </div>

            <img 
                src={HomeImage} 
                className="mt-10"
            />
        </div>
    )
}