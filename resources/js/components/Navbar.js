import { useAuth } from "./use-auth";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import { Fragment, useEffect } from "react";
import axios from "axios";

function Navbar() {
    const auth = useAuth();
    useEffect(() => {
        auth.initialize().then((response) => {});
    }, []);
    return (
        <nav className="navbar">
            <ul className="right">
                {auth.user ? (
                    <Fragment>
                        <li>
                            <Logout />
                        </li>
                    </Fragment>
                ) : (
                    <Fragment>
                        <li>
                            <Register />
                        </li>
                        <li>
                            <Login />
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
