/**
 * DEPENDENCIES
 */
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { parseString } from 'xml2js';
import { AutoComplete, Typography } from 'antd';
const { Option } = AutoComplete;
const { Text } = Typography;

/**
 * CONSTANTS
 */
import { API_BASE_URL, CROSS_ORIGIN_URL } from '../const/api';
import * as ROUTES from '../const/routes';

const INITIAL_STATE = {
	value: '',
	suggestions: []
};

class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };

		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
	}

	handleChange(value) {
		const { history } = this.props;
		this.setState({ value });

		history.push({
			pathname: 'book',
			search: `?search=${value}`
		});

		// axios
		// 	.get(`${CROSS_ORIGIN_URL}/${API_BASE_URL}/search/index.xml`, {
		// 		params: {
		// 			key: process.env.GOODREADS_API_KEY,
		// 			q: value
		// 		}
		// 	})
		// 	.then(xml => {
		// 		parseString(xml.data, (err, result) => {
		// 			let hasSuggestions = _.isPlainObject(
		// 				result['GoodreadsResponse']['search'][0]['results'][0]
		// 			);
		// 			let suggestionsRes = hasSuggestions
		// 				? result['GoodreadsResponse']['search'][0]['results'][0]['work']
		// 				: null;

		// 			if (hasSuggestions) {
		// 				console.log(suggestionsRes);
		// 				let suggestions = suggestionsRes.map(book => {
		// 					return {
		// 						id: book['best_book'][0]['id'][0]['_'],
		// 						title: book['best_book'][0]['title'][0],
		// 						author: book['best_book'][0]['author'][0]['name'][0]
		// 					};
		// 				});

		// 				this.setState({ suggestions });
		// 			}
		// 		});
		// 	})
		// 	.catch(error => console.log(error));
	}

	handleSelect(bookId) {
		this.setState({ ...INITIAL_STATE });
		this.props.history.push(`${ROUTES.BOOK}/${bookId}`);
	}

	renderSuggestions() {
		const { title, suggestions } = this.state;

		if (suggestions && title !== '') {
			return suggestions.slice(0, 6).map((suggestion, index) => {
				const { id, title, author } = suggestion;

				return (
					<Option key={id}>
						<div>
							<Text strong>{title}</Text>
						</div>
						<div>
							<Text type="secondary">{author}</Text>
						</div>
					</Option>
				);
			});
		}
	}

	render() {
		return (
			<form className="search">
				<AutoComplete
					value={this.state.value}
					dataSource={this.renderSuggestions()}
					style={{ width: 360 }}
					onSearch={this.handleChange}
					onSelect={this.handleSelect}
					placeholder="Search books"
					size="default"
				/>
			</form>
		);
	}
}

export default withRouter(SearchBox);
