import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const handleLogout = () => {
    sessionStorage.removeItem('token');
    history.push('/login');
  };

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
					<button onClick={handleLogout}>Logout</button>;
					</Link>
				</div>
			</div>
		</nav>
	);
};

