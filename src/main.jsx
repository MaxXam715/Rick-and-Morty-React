import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import Router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={Router}/>
);