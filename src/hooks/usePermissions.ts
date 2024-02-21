import * as R from "ramda";
// import { useAuth } from "../context/AuthProvider.tsx";

type UsePermissionsProps = {
  CP: number[];
  acceptType?: "some" | "every";
};

const usePermissions = ({
  CP, // Component Permissions
  acceptType = "some",
}: UsePermissionsProps) => {
  // const { user } = useAuth();

  // const UP = user?.permissions ?? null;
  const UP = [1];

  if (!UP?.length || !CP?.length) return false;

  if (acceptType === "some") {
    return R.intersection(UP, CP).length > 0;
  } else {
    return R.intersection(UP, CP).length === CP.length;
  }
};

export default usePermissions;
