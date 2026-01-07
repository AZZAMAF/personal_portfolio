// Node Modules
import { useState } from "react";
import {motion, AnimatePresence} from 'motion/react';

// Custom Modules
import { fadeUp, staggerContainer } from "@/lib/animations";

// Assets
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    sparkleIcon,
    StarIcon,
} from 'lucide-react'

// Constans
import { testimonials } from "@/constans";

export const Testimonials = ()=> {
    return(
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once:true, amount: 0.3}}        
            variants={fadeUp}
            className='mt=30 scroll-mt-10'
            id='testimonials'
        >
            <p
                variants={fadeUp}
                className="flex items-center justify-center py-1 
                gap-2 border border-neutral-600 rounded-sm w-32">
                    <SparkleIcon size={15}/>{subtitle}
            </p>

                <motion.h2 
                variants={fadeUp}
                className="text-4xl font-bold capitalize mt-2
                md:max-w-3xl">
                    {title}
            </motion.h2>
        </motion.section>
    )
}