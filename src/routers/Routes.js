import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main/Main";
import UserDashboardLayout from "../layouts/UserDashboardLayout/UserDashboardLayout";
import About from "../pages/About/About";
import AdminLogin from "../pages/Auth/AdminLogin/AdminLogin";
import AdminRegistration from "../pages/Auth/AdminLogin/AdminRegistration";
import UserLogin from "../pages/Auth/UserLogin/UserLogin";

import CheckAuthenticity from "../pages/Customer/CheckAuthenticity";
import DrugVerify from "../pages/Customer/DrugVerify";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllAdmin from "../pages/Dashboard/AllAdmin/AllAdmin";
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
import ViewDistributorSendReq from "../pages/Dashboard/UserDashboard/Distributor/ViewDistributorSendReq";
import ViewRetailerRequests from "../pages/Dashboard/UserDashboard/Distributor/ViewRetailerRequests";
import AddDrugsMenufacturer from "../pages/Dashboard/UserDashboard/Menufacturer/AddDrugsMenufacturer";
import HomePageMenufacturer from "../pages/Dashboard/UserDashboard/Menufacturer/HomePageMenufacturer";
import MenuViewDrugDetails from "../pages/Dashboard/UserDashboard/Menufacturer/MenuViewDrugDetails";
import ViewDrugRequest from "../pages/Dashboard/UserDashboard/Menufacturer/ViewDrugRequest";
import HomeRetailer from "../pages/Dashboard/UserDashboard/Retailer/HomeRetailer";
import RetailerRequestDrugs from "../pages/Dashboard/UserDashboard/Retailer/RetailerRequestDrugs";

import HomeTransportAgency from "../pages/Dashboard/UserDashboard/TransportAgency/HomeTransportAgency";
import TransportAgencyRequestDrugs from "../pages/Dashboard/UserDashboard/TransportAgency/TransportAgencyRequestDrugs";
import ViewTransportAgencySendReq from "../pages/Dashboard/UserDashboard/TransportAgency/ViewTransportAgencySendReq";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

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
        path: "/drugVerify",
        element: <DrugVerify></DrugVerify>,
      },
      {
        path: "/customer/:drugCode",
        element: <CheckAuthenticity></CheckAuthenticity>,
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
        element: (
          <PrivateRoute>
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adminadd",
        element: (
          <PrivateRoute>
            <AdminRegistration></AdminRegistration>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/alladmins",
        element: (
          <PrivateRoute>
            <AllAdmin></AllAdmin>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/registerMenufacturer",
        element: (
          <PrivateRoute>
            <MenufacturerRegister></MenufacturerRegister>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/registerDistributor",
        element: (
          <PrivateRoute>
            <DistributerRegister></DistributerRegister>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/registerRetailer",
        element: (
          <PrivateRoute>
            <RetailerRegister></RetailerRegister>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/registerTransport",
        element: (
          <PrivateRoute>
            <TransportRegister></TransportRegister>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allTransportAgency",
        element: (
          <PrivateRoute>
            <AllTransportAgency></AllTransportAgency>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allRetailer",
        element: (
          <PrivateRoute>
            <AllRetailer></AllRetailer>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allDistributor",
        element: (
          <PrivateRoute>
            <AllDistributor></AllDistributor>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allMenufacturer",
        element: (
          <PrivateRoute>
            <AllMenufacturer></AllMenufacturer>
          </PrivateRoute>
        ),
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
        path: "/userdashboard/menuViewDrugRequest",
        element: <ViewDrugRequest></ViewDrugRequest>,
      },
      {
        path: "/userdashboard/menuViewDrugDetails",
        element: <MenuViewDrugDetails></MenuViewDrugDetails>,
      },
      {
        path: "/userdashboard/homeDistributor",
        element: <HomePageDistributor></HomePageDistributor>,
      },
      {
        path: "/userdashboard/distributorRequestDrugs",
        element: <DistributorRequestDrugs></DistributorRequestDrugs>,
      },
      {
        path: "/userdashboard/distributorSendReq",
        element: <ViewDistributorSendReq></ViewDistributorSendReq>,
      },
      {
        path: "/userdashboard/distributorViewRetailerReq",
        element: <ViewRetailerRequests></ViewRetailerRequests>,
      },
      {
        path: "/userdashboard/homeRetailer",
        element: <HomeRetailer></HomeRetailer>,
      },
      {
        path: "/userdashboard/retailerRequestDrugs",
        element: <RetailerRequestDrugs></RetailerRequestDrugs>,
      },

      {
        path: "/userdashboard/homeTransportAgency",
        element: <HomeTransportAgency></HomeTransportAgency>,
      },
      {
        path: "/userdashboard/transportAgencyRequestDrugs",
        element: <TransportAgencyRequestDrugs></TransportAgencyRequestDrugs>,
      },
      {
        path: "/userdashboard/transportAgencySendReq",
        element: <ViewTransportAgencySendReq></ViewTransportAgencySendReq>,
      },
    ],
  },
]);
