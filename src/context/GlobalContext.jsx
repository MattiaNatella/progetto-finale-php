import { createContext, useContext, useState } from 'react'


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    //variabile di stato degli atleti
    const [athletes, setAthletes] = useState([])

    //funzione per il fetch dei dati
    const fetchData = () => {
        axios.get(import.meta.env.VITE_API_URL)
            .then((res) => {
                setAthletes(res.data)
            })
            .catch((err) => console.log(err))
    }

    //variabile value che conterrà tutti i dati da trasferire agli altri componenti
    const value = {
        fetchData,
        athletes,
        setAthletes
    }

    //inserisco value come prop nell'attributo value del provider
    return (
        <GlobalProvider.Provider value={value}>
            {children}
        </GlobalProvider.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContext };