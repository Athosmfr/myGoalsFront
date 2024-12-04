import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import Profile from '../images/undraw_male_avatar_g98d.svg';
import { useState } from "react";

export function Navbar() {
  // const location = useLocation();
  const navigate = useNavigate();

  // const isGoalsPage = location.pathname == "/goals";
  const isLoggedIn = localStorage.getItem('token') !== null;

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleDropdown = () => setProfileMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

    return(
    <nav className="w-full px-6 h-16 flex justify-between items-center pt-12">
        <div className="flex items-center">
          <Link to="/"><img src="" alt="" /></Link>
          <h1 className="font-bold text-4xl"><Link to="/">myGoals</Link></h1>
        </div>
        <ul className="flex items-center w-[525px] justify-between">
          <li className="text-xl"><Link to="/">Home</Link></li>
          <li className="text-xl"><Link to="/about">About</Link></li>
          <li className="text-xl"><Link to="/credits">Credits</Link></li>
          {isLoggedIn ? (
            <>
              <li className="text-xl">
                <Link to="/goals">Goals</Link>
              </li>
              <li className="relative">
                <Link to=""><img className="w-16 h-16" src={Profile} alt="Profile avatar picture" onClick={toggleDropdown} /></Link>
          {profileMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white text-black rounded-xl shadow-lg">
                  <ul className="flex flex-col">
                    <li className="text-xl px-4 py-2 cursor-pointer rounded-t-xl hover:bg-zinc-400"><Link to="#">Account</Link></li>
                    <li className="text-xl px-4 py-2 cursor-pointer rounded-b-xl hover:bg-zinc-400 text-red-500" onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
              </li>
            </>            
          ) : (
          <li className="text-xl"><Button onClick={() => navigate('/login')} variant="default"><Link to="/login">Login or Sign Up</Link></Button></li>
          )}
        </ul>
            
    </nav>
    )
}