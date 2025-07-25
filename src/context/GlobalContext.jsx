import { createContext, useContext, useState } from 'react'
import axios from 'axios';


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    //variabile di stato degli atleti
    const [athletes, setAthletes] = useState([])
    const [athlete, setAthlete] = useState([])

    //funzione per il fetch dei dati
    const fetchData = () => {
        axios.get(import.meta.env.VITE_API_URL)
            .then((res) => {
                setAthletes(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    //funzione per trovare il singolo atleta
    const findAthlete = (id) => {
        const findAthlete = athletes.find(element => (
            element.id == id
        ))
        setAthlete(findAthlete);
    }

    //variabile value che conterrà tutti i dati da trasferire agli altri componenti
    const value = {
        fetchData,
        athletes,
        setAthletes,
        athlete,
        setAthlete,
        findAthlete
    }

    //inserisco value come prop nell'attributo value del provider
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };