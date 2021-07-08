import { useAuth } from "./use-auth.js";

export default function Dashboard() {
    const auth = useAuth();

    //console.log(JSON.stringify(auth.user));

    return <div>{auth.user ? `Welcome ${auth.user.name}` : ""}</div>;
}
