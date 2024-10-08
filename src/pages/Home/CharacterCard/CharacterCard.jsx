import style from "./CharacterCard.module.scss";
import {Link} from "react-router-dom";

export default function CharacterCard({person}) {
    console.log('person', person);

    return (
        <div className={style.character_card}>
            <Link to={`/character/` + person.id}>
                <img src={person.image} alt="avatar" className={style.avatar}/>
            </Link>
            <div className={style.info_container}>
                <div className={style.params_wrapper}>
                    <Link to={`/character/` + person.id} className={style.name}>{person.name}</Link>
                    <div className={style.status}>
                        <span className={`${style.circle} ${style[person.status]}`}></span>{person.status} - {person.species}
                    </div>
                </div>
                <div className={style.params_wrapper}>
                    <span className={style.label}>Last known location:</span>
                    <span className={style.value}>{person.location.name}</span>
                </div>
                <div className={style.params_wrapper}>
                    <span className={style.label}>First seen in:</span>
                    <span className={style.value}>Rickmancing the Stone</span>
                </div>
            </div>
        </div>
    )
}