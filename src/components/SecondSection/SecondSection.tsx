import s from './SecondSection.module.scss'
import {useInView, useScroll, useTransform, motion} from "motion/react";
import {useEffect, useRef} from "react";
export const SecondSection = () => {
    const sectionRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: sectionRef,

        offset: ["center end", "center start"]

    })

    const opacity = useTransform(scrollYProgress,
        [0, 0.1, 0.5, 0.9], [0, 0, 1, 0])


    return (
        <div ref={sectionRef} className={s.container}>
            <motion.p className={s.text} style={{opacity}} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores atque beatae blanditiis consectetur, deleniti dolorum eaque e m iusto laboriosam magnam maxime minima molestiae
            </motion.p>
        </div>
    );
};
