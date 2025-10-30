
import s from "./BackgroundSphere.module.scss"   ;
import Silk from "../../bits/Silk/Silk.tsx";

interface BackgroundSphereProps {
    className?: string
}
const BackgroundSphere = ({className} : BackgroundSphereProps) => {
    return (
        <div className={s.background}>
            <Silk speed={20} noiseIntensity={0} scale={1.5} color={"#fff"} />
        </div>
    );
};

export {BackgroundSphere};
