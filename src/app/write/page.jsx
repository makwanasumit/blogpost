'use client'
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import EditorComonent from '@/app/component/Editor/EditorComponent';

const Page = () => {
    const router = useRouter();
    const { data, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/loginpage');
        }
    }, [status, router]); // Run only when status or router changes

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        return null; // Prevents rendering before redirecting
    }

    return (
        <div className='select-none my-16'>
            <EditorComonent />
        </div>
    );
};

export default Page;
