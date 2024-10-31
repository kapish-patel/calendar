import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    }
]);

export default AppRouter;