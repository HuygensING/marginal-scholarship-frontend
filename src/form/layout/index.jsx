import React from "react";
import Immutable from "immutable";

import Form from "../base";

import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";

import {FORM} from "../../constants";

class Layout extends Form {
	render() {
		let model = this.props.value;

		return (

			<ul className={FORM}>
				<li>
					<label>
						Textblock width
					</label>
					<Input
						onChange={this.handleChange.bind(this, "textWidthMin")}
						placeholder="min"
						value={model.get("textWidthMin")} />
					<span>-</span>
					<Input
						onChange={this.handleChange.bind(this, "textWidthMax")}
						placeholder="max"
						value={model.get("textWidthMax")} />
				</li>
				<li>
					<label>
						Textblock height
					</label>
					<Input
						onChange={this.handleChange.bind(this, "textHeightMin")}
						placeholder="min"
						value={model.get("textHeightMin")} />
					<span>-</span>
					<Input
						onChange={this.handleChange.bind(this, "textHeightMax")}
						placeholder="max"
						value={model.get("textHeightMax")} />
				</li>
				<li>
					<label>Horizontal layout</label>
					<Input
						onChange={this.handleChange.bind(this, "horizontalLayout")}
						value={model.get("horizontalLayout")} />
				</li>
				<li>
					<label>Vertical layout</label>
					<Input
						onChange={this.handleChange.bind(this, "verticalLayout")}
						value={model.get("verticalLayout")} />
				</li>
				<li>
					<label>Lines</label>
					<Input
						onChange={this.handleChange.bind(this, "linesMin")}
						value={model.get("linesMin")} />
					<span>-</span>
					<Input
						onChange={this.handleChange.bind(this, "linesMax")}
						value={model.get("linesMax")} />
				</li>
				<li>
					<label>Line height</label>
					<Input
						onChange={this.handleChange.bind(this, "lineHeight")}
						value={model.get("lineHeight")} />
					<span>mm (per 10 lines)</span>
				</li>
				<li>
					<label>Number of pages</label>
					<Input
						onChange={this.handleChange.bind(this, "foliaCount")}
						value={model.get("foliaCount")} />
				</li>
				<li>
					<label>Folia range</label>
					<Input
						onChange={this.handleChange.bind(this, "pages")}
						value={model.get("pages")} />
				</li>
				<li>
					<label>Remarks</label>
					<Textarea
						onChange={this.handleChange.bind(this, "remarks")}
						value={model.get("remarks")} />
				</li>
			</ul>
		);
	}
}

Layout.defaultFormProps = {
	foliaCount: "",
	horizontalLayout: "",
	linesMin: "",
	linesMax: "",
	lineHeight: "",
	pages: "",
	remarks: "",
	textWidthMin: "",
	textWidthMax: "",
	textHeightMin: "",
	textHeightMax: "",
	verticalLayout: ""
};

export default Layout;