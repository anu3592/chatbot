
const Nav = () => {
    return (
        
        <div className='flex sm:flex-col lg:flex-row justify-center w-full gap-10 items-center bg-purple-700 lg:h-12 sm:h-15'>
            <div>
            <a href="home.html" className="text-white text-lg hover:bg-white hover:rounded-xl hover:p-2 hover:text-purple-700 mx-2"><b>Home</b></a>
            <a href="/css/" className="text-white text-lg hover:bg-white hover:rounded-xl hover:p-2 hover:text-purple-700 mx-2"><b>About Us</b></a>
            <a href="login.html" className="text-white text-lg hover:bg-white hover:rounded-xl hover:p-2 hover:text-purple-700 mx-2"><b>Services</b></a>
            <a href="signup.html" className="text-white text-lg hover:bg-white hover:rounded-xl hover:p-2 hover:text-purple-700 mx-2"><b>Contact Us</b></a>
            </div>
            
    </div>
    
    )
}

export default Nav;
