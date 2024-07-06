import React, { useState } from "react";
import SentimentoPage from './SentimentoPage';

const CatalagoItens = ({ catalagos }) => {
    const [botaoSelecionado, setBotaoSelecionado] = useState(null);
    const handleEscClick = (id) => {
        if (id === botaoSelecionado) {
            setBotaoSelecionado(null);
        } else {
            setBotaoSelecionado(id);
        }
    }

    return (
        <>
            <div className='vazio'>
                <div className='section-itens'>
                    {catalagos.map((catalago, index) =>
                        catalago.imagem ?
                            <SentimentoPage key={index} className={`emocao ${catalago.imagem.toLowerCase()}`} imagem={catalago.imagem} cor={botaoSelecionado === index ? "3px solid white" : 'none'} />
                            : <SentimentoPage key={index} className={`emocao`} imagem={catalago.imagem} />
                    )}
                        <div className='div-btns'>
                            <h1>HOJE VOCÊ ESTÁ?</h1>
                        {catalagos.map((catalago, index) =>
                            catalago.nome ?
                                <button key={index} className={`btn ${catalago.nome.toLowerCase()}`} onClick={() => handleEscClick(index)}>{catalago.nome}</button>
                                : <button key={index} className={`btn`} onClick={() => handleEscClick(index)}>{catalago.nome}</button>
                        )}
                        </div>
                    </div>
               </div>
        </>
    )
}

export default CatalagoItens;
