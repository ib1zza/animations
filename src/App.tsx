import {Hero} from "./components/Hero/Hero.tsx";
import './App.css'
import {Wrapper} from "./components/UI/Wrapper/Wrapper.tsx";

import {useScroll, motion, useTransform, useMotionValueEvent} from "motion/react"
import Silk from "./bits/Silk/Silk.tsx";
import ReactLenis from "lenis/react";
import {SecondSection} from "./components/SecondSection/SecondSection.tsx";

export const App = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"]
    })

    const totalHeight = 9;

    const heroHeight = 2;

    const heroTop = heroHeight / totalHeight;


    const scale = useTransform(
        scrollYProgress,
        [0, heroTop / 8, heroTop / 4, heroTop / 2, heroTop],
        [0, 0 ,0.05, 2.5, 2]
    )

    const scaleOpposite = useTransform(
        scale,
    [1, 0],
    [0, 1]);

    const positionX = useTransform(
        scrollYProgress,
        [0, heroTop / 4,   heroTop / 2, heroTop],
    ['0vw', "50vw", "50vw", '-50vw' ])


    const positionY = useTransform(
        scrollYProgress,
        [0, heroTop / 2, heroTop],
    ['0vh', "0vh", "-10vh" ])


    const opacity = useTransform(
        scrollYProgress,
        [0, heroTop / 8, heroTop / 4, heroTop],
    ['0', '0', "1", "1"])



    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log('app', latest / heroTop)
    })

    return (
        <div className={'page'}>
            <ReactLenis root />
            <div className={'background'}>
                <motion.div style={{scale, x: positionX, y: positionY, opacity}} className='sphere' />
                <div className={'background__silk'}>
                    <Silk speed={20} noiseIntensity={2} scale={1.5} color={"#ffffff"} />
                </div>

            </div>
            <Wrapper>
                <Hero/>
                <SecondSection />
            </Wrapper>
        </div>
    );
};
