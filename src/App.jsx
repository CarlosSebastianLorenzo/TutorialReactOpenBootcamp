import PropTypes from 'prop-types';
import Contacto from './components/pure/Contacto';

const App = () => {
    return (
        <div>
            <Contacto nombre="Lionel" apellido='Messi'
                email="messi@gmail.com" conectado="true"
            ></Contacto>
        </div>
    );
};

App.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,
};

export default App;
