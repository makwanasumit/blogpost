
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const AuthLinks = ({ className }) => {
    const { status } = useSession();
    return (
        <>
            {status === 'unauthenticated' ? (
                <Link href='/loginpage' className={`${className} `}>Login</Link>
            ) : (

                <>
                    <Link href='/write' className={`${className} `}>Write</Link>
                    <span onClick={() => signOut()} className={`${className} cursor-pointer`}>Logout</span>
                </>
            )}
        </>
    )
}

export default AuthLinks