import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authProvider } from "../../Auth/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { handleUserSignIn, handleGoogleUserCreate, handleGitHubUserCreate } = useContext(authProvider);
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignInUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!/@gmail\.com$/.test(email)) {
            toast('example@example.com')
            return
        }
        if (password.length < 6) {
            toast('Password should be at least 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast('Your password must contain at least one uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Your password must contain at least one Lowercase letter')
            return;
        }
        handleUserSignIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error);
                toast('Invalid Email or password')
            })
    }

    const handleGoogle = () => {
        handleGoogleUserCreate()
            .then((result) => {
                console.log(result.user);
                toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleGitHub = () => {
        handleGitHubUserCreate()
            .then((result) => {
                console.log(result.user);
                toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="my-10">
            <div className="lg:w-[800px] md:w-[450px] w-[350px] mx-auto border-2 rounded-lg shadow-lg">
                <div className="text-center p-2 lg:text-3xl text-base font-semibold my-2">
                    <h2>Pleace Login Now</h2>
                </div>
                <form onSubmit={handleSignInUser}>
                    {/* email  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Email</label>
                        <div>
                            <input type="email" name="email" placeholder="Enter Your Email" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>
                    {/* password  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Password</label>
                        <div>
                            <input type="password" name="password" placeholder="Enter Your password" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* redairect  */}
                    <div className="my-3 px-3 flex justify-between items-center">
                        <div className="text-base text-blue-500 cursor-pointer">
                            <h2>Forgot Password</h2>
                        </div>
                        <div className="text-base text-blue-500 cursor-pointer">
                            <Link to="/register"><h2>Create new account</h2></Link>
                        </div>
                    </div>

                    {/* button  */}
                    <div className="my-3 px-3">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>

                {/* social media login  */}
                <div className="my-5">
                    <h2 className="my-3 text-center text-base font-semibold">Sign-Up With Social Media</h2>
                    <div className=" px-3 flex justify-center items-center gap-5 my-5">
                        <button onClick={handleGoogle}><FaGoogle className="text-4xl font-bold rounded-full border-2 border-black"></FaGoogle></button>
                        <button onClick={handleGitHub}><FaGithub className="text-4xl font-bold rounded-full border-2 border-black"></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;