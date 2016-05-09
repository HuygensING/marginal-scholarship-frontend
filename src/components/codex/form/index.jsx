import { connect } from 'react-redux';
import Tabs from './tabs';
import { addUnit, newCodex, resetCodex, saveCodex, setCodex } from 'actions/codices';
import { formChangeKey, formDeleteKey, formInvalid } from 'actions/form';

export default connect(
	state => ({
		authenticated: state.user.authenticated,
		codex: state.codices.current,
		facetData: state.search.facetData,
		localities: state.localities,
		persons: state.persons,
		texts: state.texts,
		saving: state.codices.saving,
	}),
	{
		addUnit,
		formChangeKey,
		formDeleteKey,
		formInvalid,
		newCodex,
		resetCodex,
		saveCodex,
		setCodex,
	},
)(Tabs);
