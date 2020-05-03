import React from 'react'
import { Paper, TextField } from "@material-ui/core"

export default class SearchBar extends React.Component {
	state = {
		searchTerm: "",
	}

//change the above declared state for searchTerm ^^ using setState below
	handleChange = (event) => this.setState({ searchTerm: event.target.value });

//fetch the searchTerm from the state
	handleSubmit = (event) => {
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);

		event.preventDefault();
	}

	render() {
		return (
			<Paper elevation={6} style={{ padding:"25px" }}>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label="Search..." onChange={this.handleChange} />
				</form>
			</Paper>
		)
	}
}