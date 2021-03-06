import React from "react";
import {Tabs, Tab} from "hire-tabs";
import Text from "./elements/text";
import Well from "../../well";

const flatten = (prev, curr) => prev.concat(curr);

const unique = (prev, curr) =>
	(prev.indexOf(curr) === -1) ? prev.concat(curr) : prev

class TextUnit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: "Text unit 1"
		};
	}

	render() {
		let codex = this.props.codices.current;
		// console.log(codex)
		// const authors = codex.textUnits
		// 	.map((textUnit) =>
		// 		textUnit.text.authors.map((author) =>
		// 			`<li>${author.person.value}</li>`
		// 		)
		// 	)
		// 	// .reduce(flatten)
		// console.log(authors.reduce, flatten)
		// console.log("fl", authors.reduce(flatten, []))
		return (
			<Tabs
				className="sub-menu"
				onChange={(name) => this.setState({tab: name})}>
				{codex.textUnits.map((textUnit, i) =>
					<Tab
						active={this.state.tab === `Text unit ${i + 1}`}
						key={i}
						label={`Text unit ${i + 1}`}>
						<Well>
							<Text label="Title">{textUnit.text.title}</Text>
							<Text label="Title in codex">{textUnit.titleInCodex}</Text>
							<Text label="Incipit">{textUnit.incipit}</Text>
							<Text label="Explicit">{textUnit.explicit}</Text>
							<Text label="Page range">{textUnit.pages}</Text>
							<div className="list">
								<label>Author(s)</label>
								<ul>{
									codex.textUnits
										.map((textUnit) =>
											textUnit.text.authors.map((author) =>
												<li>{author.person.value}</li>
											)
										)
										.reduce(flatten, [])
										.reduce(unique, [])
								}</ul>
							</div>
							<Text label="Period">{textUnit.text.period}</Text>
							<Text label="Language">{textUnit.text.language}</Text>
							<Text label="Genre">{textUnit.contentTypes}</Text>
							<Text label="State of preservation">{textUnit.stateOfPreservation}</Text>
						</Well>
					</Tab>
				)}
			</Tabs>
		);
	}
}

export default TextUnit;
