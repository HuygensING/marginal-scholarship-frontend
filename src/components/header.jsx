import React from "react";
import {Link} from "react-router";
import {Login, Federated} from "hire-login";
import {meUrl} from "../config";

class Header extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<header>
				<h1>
					<Link to="/">Marginal Scholarship</Link>
					<Link to="/codex/edit" className="add-codex">+</Link>
				</h1>
				<div className="logos">
					<img src="/images/knaw-logo.svg" title="Koninklijke Nederlandse Akademie van Wetenschappen" className="knaw"/>
					<img src="/images/huygens-logo.svg" title="Huygens ING" className="huygens"/>
					<img src="/images/nwo-logo.svg" title="Nederlandse Organisatie voor Wetenschappelijk Onderzoek" className="nwo"/>
				</div>
				<Login
					appId="hi-marschol2"
					onChange={this.props.onUserLogin}
					loggedInLabel=""
					tokenPrefix="Federated "
					userUrl={meUrl}>
					<Federated url="https://secure.huygens.knaw.nl/saml2/login"/>
				</Login>
			</header>
		);
	}
}

Header.propTypes = {
	onUserLogin: React.PropTypes.func
}

export default Header