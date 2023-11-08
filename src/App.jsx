import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth } from "./redux/actions";
// import RequireAuth from "./pages/RequireAuth";

const App = () => {
  const { user } = useSelector((store) => store.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserAuth());
    if (user) {
      navigate("/home", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [user]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              {/* <RequireAuth> */}
              <Header />
              <Home />
              {/* </RequireAuth> */}
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
