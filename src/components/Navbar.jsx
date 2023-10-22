import "../index.css";

function Navbar() {
    return (
        <>
            <nav className="bg-slate-900 text-white">
                <div className="flex flex-col md:justify-around">
                    <div className="p-4 mx-5">
                        <ul className="flex flex-col p-4 justify-center items-center space-y-2 md:flex-row">
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About Me</li>
                            <li>Contact Me</li>
                        </ul>

                    </div>




                    <div className="flex flex-col w-full">
                        <input className="w-1/2 mx-auto rounded h-8 placeholder:text-center " type="text" placeholder="Search" />



                        <button className="px-4 pb-4 bg-slate-200">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-8 h-5" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                        
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar