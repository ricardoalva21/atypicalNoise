import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Bienvenido al Dashboard</h1>
            <p>Usuario: {user?.email}</p>
        </div>
    );
};

export default Dashboard;
