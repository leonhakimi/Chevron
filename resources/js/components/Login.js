import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { useAuth } from "./use-auth.js";
import { useHistory, useParams } from "react-router-dom";

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [validation, setValidation] = React.useState("");

    const auth = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const signedIn = await auth.signin(email, password);
        if (signedIn) {
            history.push("/dashboard");
        } else {
            setValidation("invalid");
        }
    }

    const modal = useRef(null);
    useEffect(() => {
        const options = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%",
        };
        M.Modal.init(modal.current, options);

        if (window.location.pathname === "/login") {
            const instance = M.Modal.getInstance(modal.current);
            instance.open();
        }
    }, []);
    return (
        <div>
            <a
                className="waves-effect waves-light btn modal-trigger"
                data-target="modal2"
            >
                Login
            </a>

            <div ref={modal} id="modal2" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit} className="container col s12">
                        <h3 className="">Login</h3>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="email_login"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    required
                                    autoComplete="off"
                                    //className={`validate ${login_response}`}
                                />
                                <label className="active" htmlFor="email_login">
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="password_login"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setValidation("");
                                    }}
                                    required
                                    autoComplete="off"
                                    className={`validate ${validation}`}
                                />
                                <label
                                    className="active"
                                    htmlFor="password_login"
                                >
                                    Password
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Invalid credentials. Please try again."
                                ></span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="waves-effect waves-light btn-small"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
