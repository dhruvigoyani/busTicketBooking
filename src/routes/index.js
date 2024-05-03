import { useRoutes } from "react-router-dom";
import { routes } from "../description/routes.description";

const AllRoutes = () => {
    const allRoutes = useRoutes(routes);
    return allRoutes;
};

export default AllRoutes;
