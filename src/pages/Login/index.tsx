import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";


export function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('token');
        if(isLoggedIn) {
            navigate('/goals')
        } 
    }, [navigate])

    function handleAuthentication (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const userLogin = {
            email,
            password
        };

        axios.post('http://localhost:8080/login', userLogin)
        .then((response) => {
            if (response.status === 200) {
                alert("Login successfull");
                localStorage.setItem('token', response.data.token);
                navigate("/goals"); 
            }
        })
        .catch((error) => {
            if (error.response) {
                // Se houver uma resposta de erro da API
                if (error.response.status === 401) {
                    alert("Invalid email or password. Please try again!");
                } else {
                    alert("Error. Please try again!");
                }
            } else {
                alert("Error. Please try again!");
            }
        });

    }

    return (
        <>
            <div className="bg-[#191A23] px-32 min-h-screen">
                <div className="flex h-16 pt-12 pb-14">
                    <h1 className="font-bold text-4xl text-white"><Link to="/">myGoals</Link></h1>
                </div>
                <div className="flex flex-col pt-14 items-center justify-center">
                    <div className="flex flex-col items-center mb-20 w-full">
                        <h1 className="text-3xl text-white font-medium mb-4">Welcome to <span className="font-bold text-[#B9FF66]">myGoals</span></h1>
                        <p className="text-white font-normal text-2xl">Enter your credentials to access your account</p>
                    </div>
                    <form onSubmit={handleAuthentication} className="flex flex-col">
                        <input value={email} type="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-12 focus:outline-none"  /> {/* Talvez transformar os inputs em um componente? */}
                        <input value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-12 focus:outline-none"  />
                        <Link to="/forgotpassword" className="self-end text-white mb-12 font-bold text-xl">Forgot your password?</Link>
                        <Button variant="secondaryBold" type="submit">Login</Button>
                        <p className="text-white text-center my-5 font-bold text-xl">Don’t have an account?</p>
                        <Button variant="whiteBold" onClick={() => navigate('/register')}>Register</Button>
                    </form>
                </div>
            </div>  
        </>
    )
}