import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

import store from "./store";

import App from "./components/app";
import Search from "./components/search";
import CodexRecord from "./components/codex/record";
import CodexForm from "./components/codex/form";

import actionHandlers from "./actions";

let createElement = (Component, props) =>
	React.createElement(Component, {
		...props, ...store.getState(), ...actionHandlers
	})

export default (
	<Router history={createBrowserHistory()} createElement={createElement}>
		<Route path="/" component={App}>
			<IndexRoute  component={Search}/>
			<Route path="codex/:id" component={CodexRecord}/>
			<Route
				component={CodexForm}
				path="codex/:id/edit(/:tab)(/:subtab)"/>
		</Route>
	</Router>
);


//    "": "search",
//    "not-found": "notFound",
//    "search(/)": "search",
//    "codex/:id/edit": "editCodex",
//    "codex/:id/:tab/edit": "editCodex",
//    "codex/:id/:tab": "codex",
//    "codex/:id": "codex"