import { Table } from "react-bootstrap";
import {useGet} from "../Hooks/Customs";
import Row from "./Row/Row";

const Dashboard = () => {
    
    const url = "http://localhost:3005/employees?includeDepartment=true";

    const {result: employees, isLoading, error} = useGet(url);

    if(error) {
        return (<div>Error: {error.message}</div>)
    }
    if(isLoading){
        return (<div>Loading...</div>)
    }
    return (
        <>
            <h4 className="text-center py-3 m-0  bg-dark text-white">Elenco dipendenti</h4>
            <div className="row">
                <div className="col">
                    <Table className="text-center" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Cognome</th>
                                <th>Indirizzo</th>
                                <th>Dipartimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(e => {
                                return <Row key={e.id} data={e} />
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Dashboard;