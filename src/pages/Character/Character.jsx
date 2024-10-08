import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getLocation, getPerson} from "../../services/api/Character.js";
import style from "./Character.module.scss";
import plugImg from "@assets/img/plug.png";

export default function Character() {
    const {characterId} = useParams();
    const [person, setPerson] = useState(undefined);
    const [loaction, setLocation] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const dataPerson = await getPerson(characterId);
            const dataLocation = await getLocation(dataPerson.location.name);

            console.log('dataLocation', dataLocation);

            setPerson(dataPerson);
            setLocation(dataLocation);
        }

        fetchData();
    }, [characterId]);

    if (!person) {
        return (
            <div className={style.loader}>
                <span className={style.loader_circle}> </span>
            </div>
        )
    }

    const OutputEpisodes = () => {
        return person.episode.map((episodeUrl) => {
            const parts = episodeUrl.split('/');
            const episodeNumber = parts[parts.length - 1];
            return (
                <Link to={`/episode/${episodeNumber}`} key={episodeNumber} className={style.item}>
                    Episode {episodeNumber}
                </Link>
            );
        });
    }

    return (
        <section className={style.card_character}>
            <div className={`G_container ${style.G_container}`}>
                <div className={`${style.main_info} ${style.card_body}`}>
                    <img src={plugImg} alt="avatar" className={style.avatar}/>
                    <div className={style.list_params}>

                        <div className={style.param_wrapper}>
                            <h1 className={style.name}>{person.name}</h1>
                            <div className={style.status}>
                                <span className={`${style.circle} ${style[person.status]}`}></span>{person.status} - {person.species}
                            </div>
                        </div>

                        <div className={style.param_wrapper}>
                            <span className={style.label}>Gender:</span>
                            <span className={style.value}>{person.gender}</span>
                        </div>

                        <div className={style.param_wrapper}>
                            <span className={style.label}>Last known location:</span>
                            <span className={style.value}>{person.location.name}</span>
                        </div>

                        <div className={style.param_wrapper}>
                            <span className={style.label}>First seen in:</span>
                            <span className={style.value}>Rickmancing the Stone</span>
                        </div>

                    </div>
                </div>


                <div className={`${style.main_episode} ${style.card_body}`}>
                    <h3 className={style.title_block}>Episodes:</h3>
                    <div className={style.list_episodes}>
                        <OutputEpisodes/>
                    </div>
                </div>

            </div>
        </section>
    )
}