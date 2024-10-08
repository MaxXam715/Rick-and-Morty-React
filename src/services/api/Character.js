import axios from "axios";

export const getAllPersons = async () => {
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getPerson = async (id) => {
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character/'+id);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getLocation = async (name) => {
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/location/?name='+name);
        return res.data;
    } catch (error) {
        return error;
    }
}