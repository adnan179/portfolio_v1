"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div className='bg-gray-500 my-24 h-16 w-1 justify-center items-center rounded-full hidden sm:flex'
    initial={{opacity:0, y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.125}}>
      
    </motion.div>
  )
}
