import { useParams } from "react-router-dom";

const Edit = () => {

    const {id, name} = useParams();

    return (
        <h2>Questa sarà la pagina di modifica dell'utente: {id}</h2>
    );
}


export default Edit;