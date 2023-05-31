import PropTypes from 'prop-types';
import { useState } from 'react';

const Estado = ({conectado}) => {

    const [state, setState] = useState(conectado);
    const changeState = ()=>{
            setState(!state);
    }
    
    return (
        <div>
            <h2>{state? 'Estado: Conectado' : 'Estado: Desconectado'}</h2>
            <button onClick={changeState}>{state? 'conectar': 'desconectar'}</button>
        </div>
    );
};


Estado.propTypes = {
    conectado: PropTypes.bool.isRequired,
};


export default Estado;


