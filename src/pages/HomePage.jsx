import { useGlobalContext } from '../context/GlobalContext'
import Card from '../components/Card'
import { useEffect } from 'react';

const HomePage = () => {

    const { fetchData, athletes } = useGlobalContext();

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='container mt-3 d-flex flex-wrap flex-column'>
            <h1 className='text-white align-self-center'>Ecco i tuoi fantastici clienti!</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {athletes.map((athlete, index) => (

                    <div className="col my-3" key={index}>
                        <Card athlete={athlete} />
                    </div>

                ))}


            </div>

        </div>
    )
}

export default HomePage