import './App.css';
import './SentimentoPage';
import Emocao1 from './img/Prancheta 1 1.png';
import Tristeza from './img/Prancheta 2 1.png';
import Nojinho from './img/Prancheta 3 1.png';
import Medo from './img/Prancheta 4 1.png';
import Raiva from './img/Prancheta 5 1.png';
import Inveja from './img/Prancheta 6 1.png';
import Ansiedade from './img/Prancheta 7 1.png';
import Vergonha from './img/Prancheta 8 1.png';
import Tedio from './img/Prancheta 9 1.png';
import CatalagoItens from './CatalagoItens';

function App() {

    const catalagoEmocao = [
        {
            imagem: Emocao1,
            nome: 'Alegre'

        },
        {
            imagem: Tristeza,
            nome: 'Triste'
        },
        {
            imagem: Nojinho,
            nome: 'Nojento'
        },
        {
            imagem: Medo,
            nome: 'Medroso'
        },
        {
            imagem: Raiva, 
            nome: 'Raivoso'
        },
        {
            imagem: Inveja,
            nome: 'Invejoso'

        },
        {
            imagem: Ansiedade,
            nome: 'Ansioso'

        },
        {
            imagem: Vergonha,
            nome: 'Envergonhado'

        },
        {
            imagem: Tedio,
            nome: 'Entediado'
        }
    ];   
    return (
    <>
    <CatalagoItens
    titulo=""
    catalagos= {catalagoEmocao}
    
    />
    </>
    )
}

export default App