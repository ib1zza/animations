import s from './Wrapper.module.scss'
interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({children}: WrapperProps) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};
