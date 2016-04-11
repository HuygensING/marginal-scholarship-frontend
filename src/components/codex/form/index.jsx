import React from "react";
import {browserHistory} from "react-router";
import cx from "classnames";
// import {Navigation, State} from "react-router";

// import watchStores from "./watch-stores";

// FLUX
// import codex from "../stores/codex";
// import persons from "../stores/persons";
// import texts from "../stores/texts";
// import codexActions from "../actions/form";
// import personsActions from "../actions/persons";
// import textsActions from "../actions/texts";
import Text from "./text-unit";
import Margin from "./margin-unit";

import MultiForm from "hire-forms-multi-form";

import CodexForm from "./codex";
import Metadata from "./metadata";
// import TextUnit from "./text-unit";
import Footer from "./footer";

import ListEditor from "./list-editor";

import {Tabs, Tab} from "hire-tabs";

import {textUnitModel, marginUnitModel} from "../../../models";

class CodexFormController extends React.Component {
	componentDidMount() {
		if (this.props.params.id != null) {
			this.props.onSetCodex(this.props.params.id);
		} else {
			this.props.onNewCodex();
		}
	}

	componentWillReceiveProps(nextProps) {
		// When transitioning from an existing codex to a new codex,
		// the new (default) codex has to be set to the data store.
		if (this.props.params.id == null && this.props.codices.current.id != null) {
			this.props.onNewCodex();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.codices !== nextProps.codices || // Codex changed
			this.props.params !== nextProps.params || // URL params changed
			this.props.persons !== nextProps.persons || // List of persons changed
			this.props.texts !== nextProps.texts || // List of texts changed
			this.props.user !== nextProps.user; // The user changed
	}

	handleTabChange(label) {
		const codex = this.props.codices.current;
		const pid = (codex.pid !== "") ?
			`/${codex.pid}` :
			"";

		browserHistory.push(`/codex${pid}/edit/${label.toLowerCase()}`);
	}

	render() {
		if (!this.props.user.authenticated) {
			return <span className="unauthorized">Unauthorized. Please login.</span>;
		}

		let codex = this.props.codices.current;

		let tab = (this.props.params.tab != null) ?
			this.props.params.tab :
			"codex";

		let footer = <Footer {...this.props}/>

		return (
			<div className="codex-form">
				<Tabs onChange={this.handleTabChange.bind(this)}>
					<Tab
						active={tab === "codex"}
						label="Codex">
						<CodexForm
							{...this.props}
							onChange={this.props.onFormChangeKey}
							value={codex} />
						{(tab === "codex") ? footer : null}
					</Tab>
					<Tab
						active={tab === "text"}
						label="Text">
						<Text {...this.props}/>
						{(tab === "text") ? footer : null}
					</Tab>
					<Tab
						active={tab === "margin"}
						label="Margin">
						<Margin {...this.props}/>
						{(tab === "margin") ? footer : null}
					</Tab>
					<Tab
						active={tab === "meta"}
						label="Meta">
						<Metadata
							formData={codex}
							onChange={this.props.onFormChangeKey}
							onDelete={this.props.onFormDeleteKey}
							onInvalid={this.props.onFormInvalid}/>
						{(tab === "meta") ? footer : null}
					</Tab>
					<Tab
						active={tab === "persons"}
						label="Persons">
						<ListEditor
							{...this.props}
							type="person"
							values={this.props.persons} />
					</Tab>
					<Tab
						active={tab === "texts"}
						label="Texts">
						<ListEditor
							{...this.props}
							type="text"
							values={this.props.texts} />
					</Tab>
				</Tabs>
			</div>
		);
	}
}

CodexFormController.propTypes = {
	codices: React.PropTypes.object,
	onFormChangeKey: React.PropTypes.func,
	onFormDeleteKey: React.PropTypes.func,
	onFormInvalid: React.PropTypes.func,
	onNewCodex: React.PropTypes.func,
	onSetCodex: React.PropTypes.func,
	params: React.PropTypes.object,
	persons: React.PropTypes.array,
	texts: React.PropTypes.array,
	user: React.PropTypes.object
}

export default CodexFormController;
