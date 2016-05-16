import React, { PropTypes } from 'react';
import Input from 'hire-forms-input';
import LiTextarea from 'formElements/li-textarea';

export default (props) => {
	const quantities = props.codex.marginalQuantities;
	let annotatedPages = Math.round((quantities.firstPagesWithMarginals / quantities.firstPagesConsidered) * 100)+"%";
	if (isNaN(annotatedPages)) annotatedPages = 'na';
	let blankPages = Math.round((quantities.totalBlankPages / props.codex.folia) * 100)+"%";
	if (isNaN(blankPages)) blankPages = 'na';
	return (
		<ul className="codex-form">
			<li className="well small-inputs marginal-activity">
			{/* <li className="well small-inputs"> */}
				<label>Quantities</label>
				<ul>
					<li>
						<label>Annotated pages %</label>
					<span className="percentage">{annotatedPages}</span>
						(
						<Input
							onChange={props.formChangeKey.bind(this, ["marginalQuantities", "firstPagesWithMarginals"])}
							value={quantities.firstPagesWithMarginals}
						/>
						<span>out of </span>
						<Input
							onChange={props.formChangeKey.bind(this, ["marginalQuantities", "firstPagesConsidered"])}
							value={quantities.firstPagesConsidered}
						/>
						)
					</li>
					<li>
						<label>Blank pages %</label>
					<span className="percentage">{blankPages}</span>
						(
						<Input
							onChange={props.formChangeKey.bind(this, ["marginalQuantities", "totalBlankPages"])}
							value={quantities.totalBlankPages}
						/>
	        <span>out of {props.codex.folia}</span>
						)
					</li>
					<li className="most-filled-page">
						<label>Most filled page %</label>
						<div className="input-percentage">
							<Input
								onChange={props.formChangeKey.bind(this, ["marginalQuantities", "mostFilledPagePctage"])}
								value={quantities.mostFilledPagePctage}
							/>
							<span className="percentage">%</span>
						</div>
						(
						<Input
							onChange={props.formChangeKey.bind(this, ["marginalQuantities", "mostFilledPageDesignation"])}
							value={quantities.mostFilledPageDesignation}
						/>
						)
					</li>
				</ul>
			</li>
			<LiTextarea
				label="Summary"
				onChange={props.formChangeKey.bind(this, "marginalsSummary")}
				value={props.codex.marginalsSummary}
			/>
		</ul>
	);
}
