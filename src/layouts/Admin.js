import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import CreateTunnel from "views/admin/CreateTunnel.js";
import UserProfile from "views/admin/UserProfile.js";
import Tables from "views/admin/Tables.js";
import {validateTokenAxios} from '../axios/login.axios';

export default function Admin() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateTokenAxios(token).then((response) => {
        if (!response.data.snsId) {
          localStorage.clear();
          window.location.href = '/';
        }
      })
    } else {
      window.location.href = '/';
    }
  }, [])

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/add" exact component={CreateTunnel} />
            <Route path="/admin/settings" exact component={UserProfile} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
