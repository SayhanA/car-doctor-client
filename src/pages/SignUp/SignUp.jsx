import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-5 w-full">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 h-full shadow-2xl bg-base-100 border px-16">
                    <form onSubmit={handleSignUp} className="card-body h-full">
                        {/* <h2 className="text-[40px] font-bold text-center p-5 ">Login</h2> */}
                        <h2 className="text-[40px] font-bold text-center p-5 ">Sign Up</h2>
                        <div className="form-control pb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold mb-2">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control pb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold mb-2">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold mb-2">Password</span>
                            </label>
                            <input type="password" placeholder="Your password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-[#FF3811] rounded-md border-0" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="text-center py-3 mb-10 text-[#444444]">
                        <p>Or Sign Up with</p>
                        <div className="flex gap-3 justify-center py-5">
                            <button className="btn btn-circle btn-outline text-xl border-0 bg-slate-200"> <FaFacebookF /> </button>
                            <button className="btn btn-circle btn-outline text-xl border-0 bg-slate-200"> <FaLinkedinIn /> </button>
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-xl border-0 bg-slate-200"> <img className="p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> </button>
                        </div>
                        <p>Already have an account? <Link to='/login' className="text-[#FF3811] font-bold">Login</Link></p>
                        {/* <p>Have an account? <Link className="text-[#FF3811] font-bold">Sign In</Link></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;