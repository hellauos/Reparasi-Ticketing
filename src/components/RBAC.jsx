import useAuth from "@/hooks/useAuth";
import { Outlet } from "react-router-dom";
import { AccessDenied } from "@/pages/Users/AccessDenied";

const RBAC = ({ allowedRoles }) => {
    const { roles } = useAuth();

    const app = roles.some((role) => allowedRoles.includes(role)) ? (
        <Outlet />
    ) : (
        <AccessDenied />
    );

    return app;
};

export default RBAC;
