import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { useAuth } from "./use-auth";

function Register() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirmation, setPasswordConfirmation] = React.useState("");
    const [email_validation, setEmailValidation] = React.useState("");
    const auth = useAuth();

    //const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(name, email, password, password_confirmation).then(
            (response) => {}
        );
    };

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid = re.test(String(email).toLowerCase());
        if (valid) {
            setEmailValidation("valid");
        } else {
            setEmailValidation("invalid");
        }
    };

    const modal = useRef(null);
    useEffect(() => {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%",
        };
        M.Modal.init(modal.current, options);
    }, []);
    return (
        <div>
            <a
                className="waves-effect waves-light btn modal-trigger"
                data-target="modal1"
            >
                Register
            </a>

            <div ref={modal} id="modal1" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit} className="container col s12">
                        <h3 className="">Register</h3>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="name_register"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    required
                                />
                                <label
                                    className="active"
                                    htmlFor="name_register"
                                >
                                    Name
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="email_register"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                    required
                                    className={`validate  ${email_validation}`}
                                />
                                <label
                                    className="active"
                                    htmlFor="email_register"
                                >
                                    Email
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Invalid Email address"
                                ></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="password_register"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <label
                                    className="active"
                                    htmlFor="password_register"
                                >
                                    Password
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="confirmation_register"
                                    type="password"
                                    name="password_confirmation"
                                    value={password_confirmation}
                                    onChange={(e) =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                    required
                                />
                                <label
                                    className="active"
                                    htmlFor="confirmation_register"
                                >
                                    Confirm Password
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="waves-effect waves-light btn-small"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
