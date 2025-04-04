import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Profile from "./Profile/Profile";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../Global";

interface Props {
  searchy?: boolean;
}

const ScreenHeader = ({ searchy = false }: Props) => {
  const { signed, setSigned } = useGlobalContext();

  const navigate = useNavigate();

  const checkSign = () => {
    console.log(localStorage);
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("user");

    if (name && token) {
      setSigned(true);
    }
  };

  useEffect(() => {
    checkSign();
  }, []);

  return (
    <nav className="Top-Screen">
      <div className="nav-left">
        <img className="logoCP" src={logo} />
      </div>

      <div className="nav-middle">
        <button className="navButton">Home</button>
        <button className="navButton">bruh</button>
        <button className="navButton">trigger</button>
        <button className="navButton">bruh</button>
      </div>

      <Search
        onChange={() => console.log("hi")}
        placeholder="Search for Bruhs, Bruhs, etc"
      />

      <div className="nav-right">
        {!signed ? (
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => {
              setSigned(false);
              localStorage.clear();
              window.location.reload();
            }}
          >
            Sign Out
          </button>
        )}
        <Profile />
      </div>
    </nav>
  );
};

export default ScreenHeader;
