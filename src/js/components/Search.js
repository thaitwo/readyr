import React from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import _ from 'lodash';
import { Input } from 'antd';

class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			title: '',
			suggestions: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });

		axios
			.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml`, {
				params: {
					key: process.env.API_KEY,
					q: this.state.title
				}
			})
			.then(xml => {
				parseString(xml.data, (err, result) => {
					let hasSuggestions = _.isPlainObject(
						result['GoodreadsResponse']['search'][0]['results'][0]
					);
					let suggestionsRes = hasSuggestions
						? result['GoodreadsResponse']['search'][0]['results'][0]['work']
						: null;

					if (hasSuggestions) {
						let suggestions = suggestionsRes.map(book => {
							return {
								title: book.best_book[0]['title'][0],
								author: book.best_book[0]['author'][0]['name'][0]
							};
						});

						this.setState({ suggestions });
					}
				});
			})
			.catch(error => console.log(error));
	}

	renderSuggestions() {
		const { title, suggestions } = this.state;

		if (suggestions && title !== '') {
			return suggestions.map((suggestion, index) => {
				return (
					<li key={index}>
						<h4>{suggestion.title}</h4>
						<p>{suggestion.author}</p>
					</li>
				);
			});
		}
	}

	render() {
		return (
			<form>
				<Input
					name='title'
					value={this.state.title}
					placeholder='Search books'
					onChange={this.handleChange}
				/>
				<ul>{this.renderSuggestions()}</ul>
			</form>
		);
	}
}

export default Search;
