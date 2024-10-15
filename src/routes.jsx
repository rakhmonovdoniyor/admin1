import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import MotorCom from './components/motor';
import SideBar from "./sidebar";
import CaravanCom from "./components/caravan";
import TuningCom from "./components/tuning";
import UsedCarCom from "./components/usedcar";
import CampingPlaceCom from "./components/campingPlace/index";
import LoginPage from "./login";
// import Login from './login/login2';
// import CreateAccount from './login/create-acc';
// import AdminDashboard from './new';
import MotorNew from "./components/motor/motor";
import MotorCom from "./components/motor/motor";
import CampPlaceCom from "./components/campingPlace/table";
import SignUp from "./login/login2";
import OP from "./login/sign-up";
import NewMotorComponent from "./components/motor/newtable";
import MotorTable from "./components/lesson";
// import TodoIndex from './todolist/indeex';
// import Todo2 from './todolist2';

function RoutesCom() {
  const location = useLocation();
  const hideComponent =
    location.pathname !== "/" &&
    location.pathname !== "/create-account" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";

  // {hideComponent && <SideBar/>}
  return (
    <>
      {hideComponent && <SideBar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<OP />} />
        {/* <Route path="/admin" element={<SideBar/>} /> */}
        {/* <Route path="/create-account" element={<CreateAccount/>} /> */}
        <Route path="/motor" element={<MotorCom />} />
        <Route path="/caravan" element={<MotorTable />} />
        <Route path="/tuning" element={<TuningCom />} />
        <Route path="/used-car" element={<UsedCarCom />} />
        <Route path="/camping-place" element={<CampPlaceCom />} />
      </Routes>
    </>
  );
}

export default RoutesCom;
