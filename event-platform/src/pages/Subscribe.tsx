import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeImage from '../assets/code-mockup.png'
import ReactIcon from '../assets/ReactJS icon.png'
import { Logo } from '../components/Logo'

const CREATE_SUBSCRIBE_MUTATION = gql `
    mutation createSubscriber($name: String!, $email: String!) {
        createSubscriber(data: {name: $name,  email: $email}) {
        id
        }
    }
`

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION)

    async function handleSubscribe(event: FormEvent){
        event.preventDefault()
    
        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }


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
                    <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>

                    <input 
                        className='bg-gray-900 rounded px-5 h-14'
                        type="text" 
                        placeholder='Seu nome completo'
                        onChange={e => setName(e.target.value)}

                    />

                    <input 
                        className='bg-gray-900 rounded px-5 h-14'
                        type="email" 
                        placeholder='Digite o seu email'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button 
                        className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
                        type='submit'
                        disabled={loading}
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