// Node Modules
import {motion} from 'motion/react';

// Custom modules
import { fadeUp,staggerContainer } from '@/lib/animations';

// Components
import{SectionHeader} from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About =  () => {
    return(
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once:true, amount: 0.3}}        
            variants={staggerContainer(0)}
            className='mt=30 scroll-mt-10'
            id='about'
        >
            <SectionHeader
                subtitle='About'
                title='Transforming complexity into effortless Design'
            />

            <motion.p
                variants={fadeUp}
                className='mt-2 text-neutral-300'>
                    I'm a designer and front-end developer passionate about transforming complex problems into clear, intuitive digital experiences. I believe great design isn't just about how something looks—it's about how it works. 
                    My approach blends creativity with strategy, 
                    ensuring every interface not only looks good but also feels effortless to use.
            </motion.p>
            <motion.div
                variants={fadeUp}
                transition={{ delay: 0.2}}
            >
                <Button className='mt-5'>Contact Me</Button>

            </motion.div>
        </motion.section>
    )
}