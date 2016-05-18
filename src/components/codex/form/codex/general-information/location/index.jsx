// TODO verify type = shelfmark and identifier = pages, is that correct? Are they used?
// TODO remove hardcoded options and use faceted search results

import React, { PropTypes } from 'react';
import form from 'hire-forms-form';
import Input from 'hire-forms-input';
import SelectCombo from 'hire-forms-select-combo';

class Location extends React.Component {
	render() {
		const model = this.props.formData;
		const institutes = this.props.facetData.hasOwnProperty('facet_s_codex_place_of_preservation') ?
			this.props.facetData.facet_s_codex_place_of_preservation.sort() :
			[];

		return (
			<ul>
				<li>
					<label>Institute</label>
					<SelectCombo
						inputPlaceholder="Add institute"
						onChange={this.props.handleChange.bind(this, "institute")}
						options={institutes}
						value={model.institute} />
				</li>
				<li>
					<label>Shelfmark</label>
					<Input
						onChange={this.props.handleChange.bind(this, "shelfmark")}
						value={model.shelfmark} />
				</li>
				<li>
					<label>Page range</label>
					<Input
						onChange={this.props.handleChange.bind(this, "pages")}
						value={model.pages} />
				</li>
				<li>
					{this.props.addButton}
				</li>
			</ul>
		);
	}
}

Location.propTypes = {
	addButton: PropTypes.bool,
	handleChange: PropTypes.func,
	formData: PropTypes.object,
	facetData: PropTypes.object,
};

export default form(Location);