import React, {useEffect, useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Landing from "views/admin/Landing.js";
import CreateTunnel from "views/admin/CreateTunnel.js";
import UserProfile from "views/admin/UserProfile.js";
import ViewTunnel from "views/admin/ViewTunnel.js";
import {validateTokenAxios} from '../axios/login.axios';
import Download from "../views/admin/Download";

export default function Admin() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateTokenAxios(token).then((response) => {
        if (!response.data.snsId) {
          localStorage.clear();
          window.location.href = '/';
        } else {
          setProfile(response.data)
        }
      })
    } else {
      window.location.href = '/';
    }
  }, [])

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100" style={{ minHeight: '100vh' }}>
        <AdminNavbar profileImageUrl={profile?.thumbnailUrl}/>
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Landing} />
            <Route path="/admin/add" exact component={CreateTunnel} />
            <Route path="/admin/settings" exact component={UserProfile} />
            <Route path="/admin/downloads" exact component={Download} />
            <Route path="/admin/dashboard/:clientId" exact component={ViewTunnel} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
