import {useEffect, useState} from "react";
import style from "./ListCharacter.module.scss";
import CharacterCard from "../CharacterCard/CharacterCard.jsx";
import {getAllPersons} from "@api/Character.js";

export default function ListCharacter() {
    const [allPersons, setAllPersons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const persons = await getAllPersons();
            setAllPersons(persons.results);
        }
        fetchData();
    }, []);

    return (
        <section className={`G_container`}>
            <div className={style['list_character']}>
                {allPersons.map(person => <CharacterCard key={person.id} person={person} />)}
            </div>
        </section>
    )
}