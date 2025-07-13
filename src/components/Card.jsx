
import styled from 'styled-components';

const Card = ({ athlete }) => {

    const imageUrl = athlete.image
        ? `http://127.0.0.1:8000/storage/${athlete.image}`
        : null;

    return (
        <StyledWrapper image={imageUrl}>
            <div className="book">
                <div className="d-flex flex-column">
                    <span className='book-text'>
                        Peso Iniziale: {athlete.initial_weight}kg
                    </span>
                    <span className='book-text'>
                        Altezza: {athlete.height_cm}cm
                    </span>
                    <button className='btn btn-info border-black my-2 w-100'>Dettagli</button>
                </div>
                <div className="cover">
                    <p className='nome-atleta'>{athlete.name} {athlete.surname}</p>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 220px;
    height: 300px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2a2a2a;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
    background-size: cover;
    background-position: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
  padding: 3px;
  color:white;
    font-size: 14px;
    font-weight: bolder;
  }
  span {
  text-align: right;
    font-size: 11px;
    font-weight: bolder;
  }
    
  .nome-atleta{
    background: rgba(255, 255, 255, 0.05);
 border-radius:8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);}`;

export default Card;
