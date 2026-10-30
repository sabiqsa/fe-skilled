import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link to="/">
					<span>Skild</span>
				</Link>
			</div>

			<div className="actions">
				<button type="button" className="btn-primary">
					<LogIn size={16} />
					Sign in
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
