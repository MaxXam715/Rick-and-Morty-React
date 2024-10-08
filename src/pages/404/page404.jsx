import style from "./page404.module.scss";

export default function page404() {
    return (
        <div className={style.error_wrapper}>
            <h1 className={style.title}>404 error</h1>
        </div>
    )
}