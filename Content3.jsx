import '../Assetes/img/mehdi.JPEG'

export default function Content3(){
    return (
        <div className="h-[120vh] w-full justify-center items-center flex flex-col">
            <div className="text-center">
                <h1 className="font-['Poppins'] text-2xl">For Personal Coaching</h1>
            </div>
            <div className=' className="flex flex-col-reverse sm:flex sm:flex-row items-center justify-center sm:gap-48 h-[100vh] sm:h-[90vh]"'>
                <div className='text-center sm:text-start'>
                    <h1 className="font-bold text-xl sm:text-4xl font-['Poppins']" >DIPLOME / CERTIFICAT</h1>
                    <p className="font-medium text-slate-700 mt-8 text-xl"><span className="text-orange-600">KICKBOXING</span> PRIVET COACH</p>
                    <p className="font-medium text-slate-700 mt-2 text-xl"><span className="text-orange-600">FULL CONTACT</span> PRIVET COACH</p>
                    <p className="font-medium text-slate-700 mt-2 text-xl"><span className="text-orange-600">MUSCULATION</span> PRIVET COACH</p>
                    <p className="font-medium text-slate-700 mt-2 text-xl">PRIVET COACHING <span className="text-orange-600">800 Dhs / Par Months</span> </p>
                    <p className="font-medium text-slate-700 mt-2 text-xl">DEIT FOOD PROGRAM <span className="text-orange-600">600 Dhs / Par Months</span> </p>
                    <p className="font-medium text-slate-700 mt-2 text-xl">PRIVET COACHING PLUS DEIT FOOD PROGRAM<br/><span className="text-orange-600">1200 Dhs / Par Months</span> </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[350px] rounded-3xl sm:mt-0 mt-24 transition-all duration-300 hover:scale-110' src={require('../Assetes/img/mehdi.JPEG')} alt='mehdi'/>
                </div>
            </div>
        </div>
    )
}