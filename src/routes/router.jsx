import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/Home/Home.jsx";
import Character from "../pages/Character/Character.jsx";
import ErrorPage from "../pages/404/page404.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <HomePage/>,
            },
            {
                path: "character/:characterId",
                element: <Character />,
            },
        ],
    },
]);

export default Router;