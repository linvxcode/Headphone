'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface props{
    children: any;
}

const ImgScale = ({children}: props) => {
  return (
    <motion.div
    initial={{scale: 0.5}}
    whileInView={{scale: 1, transition: {type: 'spring', duration: 1}}}
    >
      {children}
    </motion.div>
  )
}

export default ImgScale
