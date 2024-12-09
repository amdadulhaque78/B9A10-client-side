import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, authProvider } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { handleCreateUser, handleSignOut } = useContext(authProvider);
    const navigate = useNavigate()

    const handelUserCreate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        if (!/@gmail\.com$/.test(email)) {
            toast('Email must end with @gmail.com')
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
        handleCreateUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast('Your sign-up successful')
                handleSignOut()
                    .then(() => {
                        console.log('LogOut')
                        navigate("/login")
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then((result) => {
                        console.log(result.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch((error) => {
                console.error(error);
                toast('Email already use')
            })
    }
    return (
        <div className="my-10">
            <div className="lg:w-[800px] md:w-[450px] w-[350px] mx-auto border-2 rounded-lg shadow-lg">
                <div className="text-center p-2 lg:text-3xl text-base font-semibold my-2">
                    <h2>Pleace Register Now</h2>
                </div>
                <form onSubmit={handelUserCreate}>
                    {/* name  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Name</label>
                        <div>
                            <input type="text" name="name" placeholder="Enter Your Name" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* email  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Email</label>
                        <div>
                            <input type="email" name="email" placeholder="Enter Your Email" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* photo  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Photo Url</label>
                        <div>
                            <input type="url" name="photo" placeholder="Enter Your Photo Url" id="" className="w-full p-3 border-2" />
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
                            <Link to="/login"><h2>Already account create</h2></Link>
                        </div>
                    </div>

                    {/* button  */}
                    <div className="my-3 px-3">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;