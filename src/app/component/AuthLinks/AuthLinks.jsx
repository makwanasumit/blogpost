
import Link from 'next/link'
import React from 'react'

const AuthLinks = ({ className }) => {
    status = 'authenticated'
    return (
        <>
            {status === 'unauthenticated' ? (
                <Link href='/loginpage' className={`${className} `}>Login</Link>
            ) : (

                <>
                    <Link href='/write' className={`${className} `}>Write</Link>
                    <span  href='/logout' className={`${className} cursor-pointer`}>Logout</span>
                </>
            )}
        </>
    )
}

export default AuthLinks