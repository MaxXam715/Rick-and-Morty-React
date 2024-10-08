import style from "./Header.module.scss";
import ram from "../../../assets/img/ram-cover.png";

export default function Header() {
    return (
        <>
            <section className={style.header}>
                <div className={`G_container`}>
                    <h1 className={style.heading}>The Rick and Morty <span className={style.part}>WIKI</span></h1>
                    <img src={ram} alt="ram" className={style.ram_cover}/>
                </div>
            </section>
        </>
    )
}