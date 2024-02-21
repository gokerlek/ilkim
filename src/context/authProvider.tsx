import { isEmpty, isNil } from "ramda";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { permissions } from "../permissions.ts";
import { END_POINT } from "../constants.tsx";

const baseUrl = "http://localhost:5173/api/url";
const use_end_point = (path: string) => `${baseUrl}/${path}`;

const fake_fetch = async (url: string, options: unknown) => {
  console.log(options);
  return {
    json: async () => {
      if (url === use_end_point(END_POINT.GET_USER)) {
        return {
          user: {
            email: "delart@gmail.com",
            permissions: [permissions.home],
            name: "John",
            surname: "Doe",
          },
        };
      }

      if (url === use_end_point(END_POINT.LOGIN)) {
        return {
          token: "123",
        };
      }

      if (url === use_end_point(END_POINT.FORGOT_PASSWORD)) {
        return {
          message: "Email sent",
        };
      }
    },
  };
};

type User = {
  email: string;
  name?: string;
  surname?: string;
  permissions: number[];
} | null;

type AuthCtx = {
  user: User | null;
  login: (credentials: { email: string; password: string }) => void;
  forgot_password: (credentials: { email: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  token?: string | null;
  forgot_password_user_list: string[] | [];
  delete_user_from_forget_password_user_list: (email: string) => void;
};

const defaultValues: AuthCtx = {
  user: null,
  login: () => {},
  forgot_password: () => {},
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
  token: null,
  forgot_password_user_list: [],
  delete_user_from_forget_password_user_list: () => {},
};

const AuthContext = createContext(defaultValues);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [forgot_password_user_list, setForgotPasswordUserList] = useState<
    string[] | []
  >([]);

  const isAuthenticated = useMemo(() => {
    return !isNil(user);
  }, [user]);

  const getUser = useCallback(async () => {
    const response = await fake_fetch(END_POINT.GET_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    setIsLoading(false);

    if (data?.user) {
      setUser(data.user);
    } else {
      logout();
    }
  }, []);

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      const response = await fake_fetch(use_end_point(END_POINT.LOGIN), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data?.token) {
        localStorage.setItem("token", data.token);
        await getUser();
      } else {
        logout();
      }
    },
    [getUser],
  );

  const update_forget_password_user_list = useCallback(
    async (email: string) => {
      if (email === null) {
        return;
      }
      const currentList = [...forgot_password_user_list] || [];

      if (isEmpty(currentList)) {
        setForgotPasswordUserList([email]);
      }

      if (currentList?.includes(email)) {
        return;
      }

      setForgotPasswordUserList([...currentList, email]);
    },
    [forgot_password_user_list],
  );

  const delete_user_from_forget_password_user_list = useCallback(
    async (email: string) => {
      if (email === null) {
        return;
      }
      const currentList = [...forgot_password_user_list] || [];

      if (isEmpty(currentList)) {
        return;
      }

      if (currentList?.includes(email)) {
        const newList = currentList.filter((item) => item !== email);
        setForgotPasswordUserList(newList);
      }
    },
    [forgot_password_user_list],
  );

  const forgot_password = useCallback(
    async (credentials: { email: string }) => {
      const response = await fake_fetch(
        use_end_point(END_POINT.FORGOT_PASSWORD),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        },
      );

      await update_forget_password_user_list(credentials.email);

      return await response.json();
    },
    [update_forget_password_user_list],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getUser().then();
    } else {
      logout();
    }
  }, [getUser, token]);

  const values = useMemo(() => {
    return {
      user,
      login,
      forgot_password,
      logout,
      isAuthenticated,
      isLoading,
      token,

      forgot_password_user_list,
      delete_user_from_forget_password_user_list,
    };
  }, [
    user,
    login,
    forgot_password,
    logout,
    isAuthenticated,
    isLoading,
    token,
    forgot_password_user_list,
    delete_user_from_forget_password_user_list,
  ]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
