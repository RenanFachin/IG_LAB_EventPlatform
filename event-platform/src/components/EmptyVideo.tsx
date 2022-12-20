import Star from '../assets/Estrela.png'

export function EmptyVideo(){
    return(
        <div className="flex-1 flex items-center justify-center">
            <div className='flex items-center justify-center gap-8 animate-pulse'>
                <img 
                    src={Star}
                />

                <span className='text-3xl text-gray-300 font-bold tracking-wide'>
                    Nenhuma aula selecionada
                </span>
            </div>
        </div>
    )
}