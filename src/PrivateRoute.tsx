import { Navigate } from "react-router-dom";
import { paths } from "./paths";
import { FC, ReactNode } from "react";
import { useAuth } from "./context/authProvider.tsx";
import { Loading } from "./components/loading.tsx";
import { isNotNil } from "ramda";
import usePermissions from "@/hooks/usePermissions.ts";

interface PrivateRouteProps {
  element: ReactNode;
  allowedPermissions: number[];
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  element,
  allowedPermissions,
}) => {
  const { user, isAuthenticated, isLoading, token } = useAuth();

  const isPermitted = usePermissions({
    CP: allowedPermissions,
  });

  if (isLoading && isNotNil(token)) {
    // While the user is being checked, show a loading indicator
    return (
      <div className="relative flex h-screen w-full items-center justify-center">
        <Loading loading={isLoading} />
      </div>
    );
  }

  if (!user?.permissions && !isAuthenticated) {
    // User is not logged in, redirect to the login page
    return <Navigate to={paths.login} />;
  }

  if (isPermitted) {
    // User has the required role, render the route
    return element;
  } else {
    // User doesn't have the required role, redirect to a 403 or access denied page
    return <Navigate to={paths.access_denied} />;
  }
};

export default PrivateRoute;
