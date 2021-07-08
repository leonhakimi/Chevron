import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState();
    const history = useHistory();

    // useEffect(() => {
    //     setUser(window.localStorage.getItem("user"));
    // }, []);

    // useEffect(() => {
    //     if (user) {
    //         window.localStorage.setItem("user", user);
    //     }
    // }, [user]);

    async function signin(email, password) {
        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", {
                email: email,
                password: password,
            });
            const visitor = await axios.get("/api/user");

            //window.localStorage.setItem("user", JSON.stringify(user.data));
            setUser(visitor.data);
            return true;
        } catch (error) {
            return false;
            console.log(error);
        }
    }

    const signout = () => {
        localStorage.clear();
        return axios.post("/logout").then((response) => {
            setUser(false);
        });
    };

    const register = (name, email, password, password_confirmation) => {
        return axios
            .post("/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            })
            .then((response) => {
                // history.push("/books");
                setUser(true);
            });
    };

    async function initialize() {
        const user = await axios.get("/api/user");
        setUser(user.data);
    }

    // Return the user object and auth methods
    return {
        user,
        signin,
        signout,
        register,
        initialize,
    };
}
