import PropTypes from 'prop-types';
import Estado from './Estado';


const Contacto = ({nombre, apellido, email, conectado}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Apellido: {apellido}</h2>
            <h2>Email: {email}</h2>
            <Estado>{conectado}</Estado>
        </div>
    );
};


Contacto.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,
};


export default Contacto;
