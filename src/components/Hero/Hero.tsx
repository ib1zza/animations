import s from './Hero.module.scss'
import {useScroll, useTransform, motion, useMotionValueEvent} from "motion/react";
import {useRef} from "react";
import Silk from "../../bits/Silk/Silk.tsx";

export const Hero = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    })

    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.25, 1],
        ['0.7', "2", "2"])


    const translateX = useTransform(scrollYProgress,
        [0, 0.25, 0.5], ["0vw","0vw", "-100vw"])

    return (
        <div ref={container} className={s.container}>

            <div  className={s.innerContainer}>

                <div className={s.innerContent}>
                    <motion.div style={{translateX, scaleY}} className={s.item}>silkworm</motion.div>
                    <motion.div style={{translateX, scaleY}} className={s.item}>is</motion.div>
                    <motion.div style={{translateX, scaleY}} className={s.item}>beautiful</motion.div>
                </div>

                <div className={s.bg}>
                    <Silk speed={20} noiseIntensity={2} scale={1.5} color={"#ffffff"} />
                </div>
            </div>
        </div>
    );
};
