'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";

const AddWidget = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(prev => !prev);
    };

    return (
        <div className="flex items-center gap-4">
            <CiCirclePlus size={42} onClick={toggleOpen} className="cursor-pointer" />
            
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -10 }} 
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 shadow-lg rounded-lg"
                    >
                        {[CiImageOn, IoCloudUploadOutline, MdOutlineVideoSettings].map((Icon, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1 }} 
                                exit={{ scale: 0 }} 
                                transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                                <Icon size={32} className="cursor-pointer p-[1px] border-[2px] rounded-full" />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AddWidget;
