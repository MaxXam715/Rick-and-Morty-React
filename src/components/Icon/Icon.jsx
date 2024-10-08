import style from "./Icon.module.scss";

export default function Icon(props) {
    console.log('props', props)
    return (
        <i className={`${style.icon} ${style[props.name]} ${props.className}`}></i>
    )
}