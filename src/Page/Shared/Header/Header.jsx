import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../../Auth/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const navMenu = <>
        <Link to="/"><li className="text-base font-medium mr-5 ">Home</li></Link>
        <Link to="/addartcraft"><li className="text-base font-medium mr-5 ">Add Art&Craft Item</li></Link>
        <Link to="/allartcraft"><li className="text-base font-medium mr-5 ">All Art&Craft Items</li></Link>
        <Link to="/myartcraft"><li className="text-base font-medium mr-5 ">My Art&Craft List</li></Link>
    </>

    // thame change state
    const [themes, setTheme] = useState('light');
    const { user, handleSignOut } = useContext(authProvider);

    useEffect(() => {
        localStorage.setItem('themes', themes)
        const localTheme = localStorage.getItem('themes')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [themes])

    const themeChange = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }

    const handleLogOut = () => {
        handleSignOut()
            .then(() => {
                console.log('user logout');
                toast(" User Sign-Out successful");
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="navbar shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="text-3xl font-bold">Art BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="cursor-pointer grid place-items-center mr-2">
                    <input
                        onChange={themeChange}
                        type="checkbox"
                        value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    user && <div className="dropdown dropdown-end mr-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user && <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> || <img alt="Tailwind CSS Navbar component" src="https://e7.pngegg.com/pngimages/384/706/png-clipart-computer-icons-user-login-gender-miscellaneous-desktop-wallpaper.png" />
                                }
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                            {
                                user && <li className="text-base font-normal">{user.displayName}</li> || <li className="text-base font-normal">No Data</li>
                            }
                            {
                                user && <button className="btn btn-primary" onClick={handleLogOut}>LogOut</button>
                            }
                        </ul>
                    </div> || <Link to="/login"><li className="btn btn-primary">Login</li></Link>
                }
            </div>
        </div>
    );
};

export default Header;