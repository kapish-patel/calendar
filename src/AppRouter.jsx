import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

/**
 * AppRouter component
 * @description
 * This component is used to define the routes of the application.
 * @returns {React.Component} AppRouter
 */
const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    }
]);

export default AppRouter;