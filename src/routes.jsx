import App from './App.jsx'
import Home from './Home/Home.jsx'
import Error from './Error/Error.jsx';
import { redirect } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, loader: () => redirect('/home') },
            { path: 'home' ,element: <Home /> }
        ]
    },
    
]

export default routes;