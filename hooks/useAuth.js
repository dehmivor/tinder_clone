import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Hàm tự động đăng nhập
    const autoLogin = () => {
      //email, password của thằng đang nhắn dở
      // const email = "hieuokas@gmail.com";
      // const password = "hieuoka";

      const email = "hieuokasss@gmail.com";
      const password = "hieuoka";
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user); // Cập nhật trạng thái người dùng
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to login automatically: ", error);
          setLoading(false);
        });
    };

    // Kiểm tra trạng thái người dùng khi ứng dụng khởi chạy
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Nếu đã có người dùng đang đăng nhập
        autoLogin();
        setUser(user);
        setLoading(false);
      } else {
        // Nếu không có người dùng, tự động đăng nhập
        autoLogin();
      }
      setLoadingInitial(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const memoedValue = useMemo(() => {
    return { user, setUser, loading, setLoading, logout };
  }, [user, loading]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
