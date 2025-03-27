'use client'
import { useEffect, useContext } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ThemeContext } from '@/context/ThemeContext';


const Login = () => {

    const { theme } = useContext(ThemeContext);
    const router = useRouter();

    const { data, status } = useSession();
    console.log("Session status:", status, data);

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status]);


    return (
        <div className={`${theme === "light" ? "bg-[#382533]" : 'bg-[#123]'} text-[#f2f2f2] flex items-center justify-center flex-col gap-8 px-6 py-18 rounded-xl w-full max-w-xl`}>
            <div onClick={() => signIn("google")} className='p-4 rounded-lg font-bold cursor-pointer bg-white text-black w-full text-center'>
                Sign in with Google
            </div>

            <div className='p-4 rounded-lg font-bold cursor-pointer bg-[#1F7CF1] w-full text-center'>
                Sign in with Github
            </div>
            <div className='p-4 rounded-lg font-bold cursor-pointer bg-[#393939] w-full text-center'>
                Sign in with Facebook
            </div>
        </div>
    );
};

export default Login;
