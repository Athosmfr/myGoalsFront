import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { useEffect } from "react";


export function Forgot() {
    const navigate = useNavigate();

    const isLoggedOn = localStorage.getItem('token');

    useEffect(() => {
        if (isLoggedOn) {
            navigate('/goals')
        }
    }, [navigate])

    return (
        <>
            <div className="bg-[#191A23] px-32 min-h-screen">
                <div className="flex h-16 pt-12 pb-14">
                    <h1 className="font-bold text-4xl text-white">myGoals</h1>
                </div>
                <div className="flex flex-col pt-14 items-center justify-center">
                    <div className="flex flex-col items-center mb-20 w-full">
                        <h1 className="text-3xl text-white font-medium mb-4">Forgot your <span className="font-bold text-[#B9FF66]">password?</span></h1>
                        <p className="text-white font-normal text-2xl">Please enter your email. You will receive a link to create a new password via email.</p>
                    </div>
                    <div className="flex flex-col">
                        <input type="email" placeholder="E-mail" className="py-5 px-8 rounded-2xl max-w-xl w-[600px] mb-12 focus:outline-none"  />
                        <div className="flex justify-around">
                            <Button className="w-64" variant="whiteBold" onClick={() => navigate('/login')}>Cancel</Button>
                            <Button variant="secondaryBold">Reset password</Button>
                        </div>
                    </div>
                    <div className="flex flex-col align-middle justify-center text-center mt-12">
                        <h1 className="text-3xl text-white font-medium mb-4">Page under <span className="font-bold text-[#ff6666]">construction!</span></h1>
                        <h1 className="text-2xl text-white font-medium mb-4">Retrieve password functionality not working!</h1>
                    </div>
                </div>
            </div>  
        </>
    )
}