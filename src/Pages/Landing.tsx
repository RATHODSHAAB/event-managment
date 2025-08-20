import { Navbar } from '../Components/Navbar'

export const Landing = () => {
return (
    <div className="bg-[#000000] ">
        <Navbar></Navbar>

        <div className="w-full; flex flex-col; items-center justify-center mt-[28px]">
        
            <h1 className="text-4xl md:text-4xl font-extrabold text-center leading-snug text-green-400 max-w-3xl">
        College emails announces events <br />
        but we makes you experience them.
        </h1>   
        </div>
        
        <div className="w-full flex flex-col items-center justify-center mt-5 py-2.5">
  <p className="text-neutral-500 text-2xl font-bold text-center">
    “Smart College App is your all-in-one platform for events, notices, and networking
  </p>
  
  <p className="text-neutral-500 text-2xl font-bold text-center mt-2">
    — so you never miss opportunities, deadlines, or connections
  </p>
  
  <p className="text-neutral-500 text-2xl font-bold text-center mt-2">
    in your college life.”
  </p>
</div>

<div className='flex justify-evenly items-center'>
        <div className="w-80 bg-black/60 backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                transition-all duration-300 text-white font-bold font-weight-400 p-6 mt-[24px] space-y-3">
            <h2 className="text-xl font-semibold text-green-400 mb-3">All in one hub</h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
                Events , Notices , networking in on clean places
             </p>
                </div>

           <div className="w-80 bg-black/60 backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                transition-all duration-300 text-white font-bold  p-6 mt-[24px] space-y-3">
              <h2 className="text-xl font-bold  text-green-400 mb-3">Never miss deadlines</h2>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Real time Notifications & remaninders
               </p>
            </div>

            <div className="w-80 bg-black/60 backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                transition-all duration-300 text-white font-bold font-weight-400 p-6 mt-[24px] space-y-3">
                <h2 className="text-xl font-semibold text-green-400 mb-3">Personalised for you </h2>
                <p className="text-gray-600 mb-2 leading-relaxed">
                See only relevant messages of your branch
                 </p>
            </div>

        </div>

</div>
    
)
}