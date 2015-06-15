//TODO verify type = shelfmark and identifier = pages, is that correct? Are they used?

import React from "react";
import Immutable from "immutable";

import HireForm from "hire-forms-form";

import Input from "hire-forms-input";
import Select from "hire-forms-select";

import {FORM} from "../../constants";

let location = new Immutable.Map({
	institute: "",
	pages: "",
	shelfmark: ""
});

let Location = React.createClass({
	mixins: [HireForm],

	render() {
		let model = location.merge(this.props.value);

		return (
			<ul className={FORM}>
				<li>
					<label>Institute</label>
					<Select
						onChange={this.handleChange.bind(this, "institute")}
						options={["München, Bayerische Staatsbibliothek", "Paris, Bibliothèque nationale de France", "Vatican City, Bibliotheca Apostolica Vaticana", "Leiden, Universiteitsbibliotheek", "Bern, Burgerbibliothek", "Wien, Österreichische Nationalbibliothek", "Amiens,  Bibliothèque municipale", "Heidelberg, Universitätsbibliothek", "Bad Homburg, Verwaltung der Staatlichen Schlösser und Gärten Hessen", "Bamberg, Staatsbibliothek", "Darmstadt, Universitäts- und Landesbibliotek", "Florence, Bibliotheca Medicea Laurenziana", "Inc. 2o 9600 (fragm.", "Karlsruhe, Badische Hof- und Landesbibliotek", "Kiel, Universitätsbibliothek", "New York, Pierpont Morgan Library", "Stuttgart, Württembergische Landesbibliothek", "Wolfenbuettel, Herzog August Bibliothek", "Würzburg, Universitätsbibliothek"]}
						value={model.get("institute")} />
				</li>
				<li>
					<label>Type</label>
					<Input
						onChange={this.handleChange.bind(this, "shelfmark")}
						value={model.get("shelfmark")} />
				</li>
				<li>
					<label>Identifier</label>
					<Input
						onChange={this.handleChange.bind(this, "pages")}
						value={model.get("pages")} />
				</li>
			</ul>
		);
	}
});

export default Location;