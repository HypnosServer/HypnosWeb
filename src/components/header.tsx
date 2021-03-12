import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export function Header() {
	return (
		<div className="header">
			<Link to="/">Home</Link>
		</div>
	);
}
