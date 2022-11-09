import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
const Row = ({data: {id = 0, name = "", surname = "", address = "", department = {id: 0, name: ""}}}) => {
    
    return (
        <tr>
            <td>
                <Link to={"edit/" + id} className="btn me-2 text-white">
                    <FontAwesomeIcon icon={faPen} />
                </Link>
                <button className="btn text-danger">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </td>
            <td>
                {name}
            </td>
            <td>
                {surname}
            </td>
            <td>
                {address}
            </td>
            <td>
                {department.name}
            </td>
        </tr>
    );
}

export default Row;