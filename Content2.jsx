import '../Assetes/img/IMG_0103.jpg'
import '../Assetes/img/IMG_0112.jpg'
export default function Content2(){
    return (
        <div className="justify-center items-center h-[140vh] sm:h-[140vh] mt-5">
            <h1 className='text-center font-["Poppins"] font-medium text-3xl mt-28 sm:mt-0'>Welcome to our<br/><span className='text-red-600'>FITNESS CLUB</span></h1>
            <div className='sm:flex sm:flex-row flex flex-col justify-center items-center gap-12 sm:gap-12 mt-20'>
            <img className='sm:w-[550px] w-[350px] sm:h-[340px] flex justify-center items-center shadow-2xl rounded-xl transition-all duration-300 hover:scale-110' src={require('../Assetes/img/IMG_0112.jpg')} alt='pic1'/>
            <img className='sm:w-[550px] w-[350px] sm:h-[340px] flex justify-center shadow-2xl items-center rounded-3xl transition-all duration-300 hover:scale-110' src={require('../Assetes/img/IMG_0103.jpg')} alt='pic'/>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-around items-center mt-28 sm:mt-32">
                <div className="text-center sm:text-start sm:float-start">
                    <h1 className="font-semibold text-2xl text-red-700">LES TARIFS</h1>
                    <p className="font-medium text-lg mt-6">Un mois <span className="text-red-700">200</span> dirhams, assurance de <span className="text-red-700">100</span> dirhams</p>
                    <p className="font-medium text-lg mt-1">Deux mois, <span className="text-red-700">400</span> dirhams assurance gratuite</p>
                    <p className="font-medium text-lg mt-1">Trois mois <span className="text-red-700">550</span> dirhams assurance gratuite</p>
                </div>
                <div className="text-center sm:text-end sm:float-right sm:mt-0 mt-12">
                    <h1 className="font-semibold text-2xl text-red-700">واجبات التسجيل</h1>
                    <p className="font-medium text-lg mt-6">شهر <span className="text-red-700">200</span> درهم تأمين <span className="text-red-700">100</span>درهم </p>
                    <p className="font-medium text-lg mt-1">شهرين <span className="text-red-700">450</span> درهم واجب التأمين مجاني </p>
                    <p className="font-medium text-lg mt-1">تلات أشهر <span className="text-red-700">550</span> درهم واجب التأمين مجاني</p>
                </div>
            </div>
        </div>
    )
}