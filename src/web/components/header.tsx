import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import icon from "../assets/icon.png"
import "../styles/header.scss";

export function Header() {
	return (
		<div className="header">
      <img className="icon" alt="hypnos icon" src={icon}/>

			<Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/map">Map</Link>
		</div>
	);
}
