import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";


export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('token');
        if(isLoggedIn) {
            navigate('/goals')
        } 
    }, [navigate])

    function handleRegistration (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name || !email || !sex || !birthDate || !username || !password) {
            alert("All fields must be filled.");  // Mostra mensagem de erro
            return;  // Não envia o formulário se faltar algum campo
        }

        const userData = {
            name,
            email,
            sex,
            birthDate,
            username,
            password
        };

        // fetch("http://localhost:8080/api/register", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(userData)
        // })
        // .then(response => {
        //     if (response.status == 201) {
        //         alert("Account created sucessfully");
        //         navigate("/login");
        //     } else {
        //         alert("Error creating account, verify your data and try again!")
        //     }
        // })
        // .catch(() => {
        //     alert("Error creating account, verify your data and try again!")
        // });

        axios.post('http://localhost:8080/user/create', userData)
        .then((response) => {
            if (response.status === 201) {
                alert("Account created successfully");
                navigate("/login"); 
            } else if (response.status === 409) {
                alert("This e-mail already exists!");
            } else {
                alert("Error creating account, verify your data and try again!");
            }
        })
        .catch((response) => {
        if (response.status === 409) {
            alert("This e-mail already exists!");
        } else {
            alert("Error creating account, verify your data and try again!");
        }
        })

        // alert("Account created successfully");
        // navigate("/login"); 

    }

    return (
        <>
            <div className="bg-[#191A23] px-32 min-h-screen">
                <div className="flex h-16 pt-12 pb-14">
                    <h1 className="font-bold text-4xl text-white"><Link to="/">myGoals</Link></h1>
                </div>
                <div className="flex flex-col pt-14 items-center justify-center">
                    <div className="flex flex-col items-center mb-20 w-full">
                        <h1 className="text-3xl text-white font-medium mb-4">Create your <span className="font-bold text-[#B9FF66]">Account</span></h1>
                        <p className="text-white font-normal text-2xl">Create an account and start developing your goals</p>
                    </div>
                    <form onSubmit={handleRegistration} className="flex flex-col">
                        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-4 focus:outline-none" />
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="E-mail" className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-4 focus:outline-none" />
                        <div className="flex justify-between">
                            <select value={sex} onChange={(event) => setSex(event.target.value)} name="sex" className="py-5 px-8 rounded-2xl max-w-64 w-64 mb-4 focus:outline-none">  {/* Ver como tirar a primeira opção como sendo uma opção valida! */}
                                <option value="">Select Gender</option>
                                <option value="MAN">Male</option>
                                <option value="WOMAN">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                            <input value={birthDate} onChange={(event) => setBirthDate(event.target.value)} type="date" className="py-5 px-8 rounded-2xl w-64 mb-4 focus:outline-none"/>
                        </div>
                        <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-4 focus:outline-none" />
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-4 focus:outline-none" />
                        <Button variant="secondaryBold" type="submit">Signup</Button> {/* Fazer a função de caso post seja efetuado mandar para a pagina de login, contrario mostrar mensagem de erro e ficar na pagina! */}
                        <p className="text-white text-center my-5 font-bold text-xl"><Link to="/login">Already have an account?</Link></p>
                    </form>
                </div>
            </div>  
        </>
    )
}