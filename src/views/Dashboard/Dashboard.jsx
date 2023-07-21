//React
import { useEffect } from "react";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Slices
import { getUserDetail } from "../../redux/slices/userDetailSlice";

//React-Router
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);
  const userDetail = useSelector((state) => state.userDetail.result);

  useEffect(() => {
    dispatch(
      getUserDetail({
        url: "https://nervous-sun-hat-cod.cyclic.app/get-user",
        data: { _id: loginState.result.user },
      })
    );
  }, [dispatch]);

  return (
    <>
      {userDetail ? (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Dashboard;
