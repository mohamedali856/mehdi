import "../Assetes/img/IMG_0079.jpeg"
import FacebookIcon from "../Assetes/SvgIcons/Facbook"
import InstagramIcon from "../Assetes/SvgIcons/Instagram"
export default function Conten(){
    return (
        <div className="flex flex-col-reverse sm:flex sm:flex-row items-center justify-center gap-8 sm:gap-48 h-[100vh] sm:h-[90vh]">
        <div className=" w-[350px]">
            <h1 className="font-bold text-xl sm:text-4xl font-['Poppins'] ">BRAS DE FER CLUB<br/>MUSCULATION</h1>
            <p className="font-medium text-slate-800 mt-8 text-xl">JEMMY ADIL<br/>COACH CERTIFIE.FR INTERNATIONAL</p>
            <p className="font-medium text-slate-700 ">DIPLOME PLANET FITNESS<span className="text-orange-600"> HPX </span>PERSONAL TRAINING TECHNIQUE</p>
            <p className="font-medium text-slate-700 ">DIPLOME ACADEMIE INTERNATIONAL DE <span className="text-orange-600">FORMATION CONTINUE</span></p>
            <button className="bg-red-600 py-2 px-6 rounded-md shadow-lg mt-5 hover:bg-red-400 transition-all">
                HIRE ME
            </button>
            <div className="flex gap-2">
            <button className="flex flex-col my-5">
            <InstagramIcon className="w-10 h-10"/>
            </button>
            <button>
            <FacebookIcon className="w-10 h-10"/>
            </button>   
            </div>

        </div>
        <div>
            <img className="w-[350px] rounded-3xl sm:mt-0 mt-24 transition-all duration-300 hover:scale-110" src={require("../Assetes/img/IMG_0079.jpeg")} alt="img"/>
        </div>
        </div>
    )
}