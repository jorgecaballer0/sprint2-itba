import React from "react";


const Sidebar = () => {

    return(
        <>
            <div className="bg-gradient-to-b from-orange-400 py-3 fixed top-0 left-0 right-0">
                <button className="ml-8 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                </button>
                </div>
            <div className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm">
                <div className="bg-cyan-600 min-h-screen w-80 fixed top-0 left-0">
                    <div className="pt-3">
                        <button className="ml-4 text-white mb-14">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                        </button>

                        <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                            Link 1
                        </div>
                        
                         <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                            Link 2
                         </div>

                        <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                            Link 3
                        </div>

                        <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                            Link 4
                        </div>

                        <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                            Link 5
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar