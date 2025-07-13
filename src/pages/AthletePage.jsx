import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

const AthletePage = () => {

    //variabile di stato che gestisce lo stato del bottone Visualizza Scheda in true/false
    const [checkExercises, setCheckExercises] = useState(true)
    //variabile che conterrà il workout della scheda selezionata per ciclare gli esercizi
    const [selectedWorkout, setSelectedWorkout] = useState(null)

    const { athlete, findAthlete } = useGlobalContext();
    const { id } = useParams();

    useEffect(() => {
        findAthlete(id)
    }, [id])


    //funzione che gestisce il click del bottone visualizza scheda
    const handleClick = (workout) => {
        console.log(workout)
        setSelectedWorkout(workout)
        setCheckExercises(true)
        console.log(selectedWorkout)
    }

    // console.log(athlete)

    return (
        <div className="container d-flex">


            <div className="container my-3 card" style={{
                maxWidth: '540px',
                background: '#291612'
            }}>
                <div className="row g-0">
                    <div className="col text-white">
                        <h5 className="card-title">Schede allenamento di <strong>{athlete?.name} {athlete?.surname}</strong></h5>
                        <ol className="my-5">
                            {athlete?.workouts?.map((workout, index) => (<li key={index} className="my-4"><strong style={{ color: 'yellow' }}>{workout?.name} </strong><button className="btn btn-success" onClick={() => handleClick(workout)}>Visualizza scheda</button></li>))}
                        </ol>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

            {/* Visualizzazione esercizi di una scheda al click del relativo bottone*/}

            {checkExercises && selectedWorkout ? (

                <div className="container my-3 card" style={{
                    maxWidth: '540px',
                    background: '#291612'
                }}>
                    <div className="row g-0">
                        <div className="col text-white">
                            <h5 className="card-title">Esercizi scheda di allenamento <strong style={{ color: 'yellow' }}>{selectedWorkout.name}</strong></h5>
                            <ol className="my-5">
                                {selectedWorkout.exercises.map((exercise, index) => (<li key={index} className="my-4">{exercise.name} Serie {exercise.pivot.sets} - Reps {exercise.pivot.reps} Note: {exercise.pivot.notes}</li>))}
                            </ol>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>)

                : (<h2 className="text-white">Clicca sul tasto "Visualizza scheda" per consultare gli esercizi relativi</h2>)}
        </div>
    )
}

export default AthletePage