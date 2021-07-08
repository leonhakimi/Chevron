import { useAuth } from "./use-auth";
import { useHistory } from "react-router-dom";

function Logout() {
    const auth = useAuth();
    const history = useHistory();
    return (
        <button
            className="waves-effect waves-light btn-small"
            onClick={() => {
                auth.signout().then((response) => {
                    history.push("/");
                });
            }}
        >
            Logout
        </button>
    );
}
export default Logout;
