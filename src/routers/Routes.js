import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main/Main";
import UserDashboardLayout from "../layouts/UserDashboardLayout/UserDashboardLayout";
import About from "../pages/About/About";
import AdminLogin from "../pages/Auth/AdminLogin/AdminLogin";
import UserLogin from "../pages/Auth/UserLogin/UserLogin";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllDistributor from "../pages/Dashboard/AllDistributor/AllDistributor";
import AllMenufacturer from "../pages/Dashboard/AllMenufacturer/AllMenufacturer";
import AllRetailer from "../pages/Dashboard/AllRetailer/AllRetailer";
import AllTransportAgency from "../pages/Dashboard/AllTransportAgency/AllTransportAgency";
import DistributerRegister from "../pages/Dashboard/Register/DistributerRegister";
import MenufacturerRegister from "../pages/Dashboard/Register/MenufacturerRegister";
import RetailerRegister from "../pages/Dashboard/Register/RetailerRegister";
import TransportRegister from "../pages/Dashboard/Register/TransportRegister";
import DistributorRequestDrugs from "../pages/Dashboard/UserDashboard/Distributor/DistributorRequestDrugs";
import HomePageDistributor from "../pages/Dashboard/UserDashboard/Distributor/HomePageDistributor";
import AddDrugsMenufacturer from "../pages/Dashboard/UserDashboard/Menufacturer/AddDrugsMenufacturer";
import HomePageMenufacturer from "../pages/Dashboard/UserDashboard/Menufacturer/HomePageMenufacturer";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/userlogin",
        element: <UserLogin></UserLogin>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/registerMenufacturer",
        element: <MenufacturerRegister></MenufacturerRegister>,
      },
      {
        path: "/dashboard/registerDistributor",
        element: <DistributerRegister></DistributerRegister>,
      },
      {
        path: "/dashboard/registerRetailer",
        element: <RetailerRegister></RetailerRegister>,
      },
      {
        path: "/dashboard/registerTransport",
        element: <TransportRegister></TransportRegister>,
      },
      {
        path: "/dashboard/allTransportAgency",
        element: <AllTransportAgency></AllTransportAgency>,
      },
      {
        path: "/dashboard/allRetailer",
        element: <AllRetailer></AllRetailer>,
      },
      {
        path: "/dashboard/allDistributor",
        element: <AllDistributor></AllDistributor>,
      },
      {
        path: "/dashboard/allMenufacturer",
        element: <AllMenufacturer></AllMenufacturer>,
      },
    ],
  },
  {
    path: "/userdashboard",
    element: <UserDashboardLayout></UserDashboardLayout>,
    children: [
      {
        path: "/userdashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/userdashboard/homeMenufacturer",
        element: <HomePageMenufacturer></HomePageMenufacturer>,
      },
      {
        path: "/userdashboard/addDrugs",
        element: <AddDrugsMenufacturer></AddDrugsMenufacturer>,
      },
      {
        path: "/userdashboard/homeDistributor",
        element: <HomePageDistributor></HomePageDistributor>,
      },
      {
        path: "/userdashboard/distributorRequestDrugs",
        element: <DistributorRequestDrugs></DistributorRequestDrugs>,
      },
    ],
  },
]);
