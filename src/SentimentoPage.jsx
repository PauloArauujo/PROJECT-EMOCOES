import react, {useState} from "react";

const SentimentoPage = ({titulo, imagem, cor}) => {

    return(
        <div className="emocao">
            <div className='titulo-card'>
                 <img src={imagem} alt={titulo} style={{border: cor}} />      
            </div>
            <h3>{titulo}</h3>
        </div>
    )
}

export default SentimentoPage