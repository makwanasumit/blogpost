'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import AddWidget from '@/app/component/AddWidget';
import { Button } from '@/app/component/ui/button'
import EditorComonent from '@/app/component/Editor/EditorComponent';





const page = () => {

    
        
    
    return (
        <div className='select-none my-16'>
            <EditorComonent/>
        </div>
    )
}

export default page

