/**
 * DEPENDENCIES
 */
import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { parseString } from 'xml2js';
import { Typography, Rate } from 'antd';
const { Title, Text } = Typography;

/**
 * CONSTANTS
 */
import { API_BASE_URL, CROSS_ORIGIN_URL } from '../const/api';

class BookPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			authors: '',
			publisher: '',
			publicationDate: '',
			description: '',
			numPages: '',
			avgRating: '',
			rateValue: 0,
			ratingsCount: '',
			reviewsCount: '',
			similarBooks: []
		};
	}

	componentDidMount() {
		const bookId = this.props.match.params.bookId;

		axios
			.get(`${CROSS_ORIGIN_URL}/${API_BASE_URL}/book/show.xml`, {
				params: {
					key: process.env.API_KEY,
					id: bookId
				}
			})
			.then(xml => {
				parseString(xml.data, (err, result) => {
					console.log(result['GoodreadsResponse']['book'][0]);
					let {
						title: [title],
						authors: [{ author }],
						publisher: [publisher],
						description: [description],
						average_rating: [avgRating],
						ratings_count: [ratingsCount],
						text_reviews_count: [reviewsCount],
						similar_books: [{ book }]
					} = result['GoodreadsResponse']['book'][0];

					author =
						author.length > 1 ? author.map(auth => auth.name[0]).join(',') : author[0]['name'][0];

					const rateValue = Math.round(Number(avgRating));

					let similarBooks = book.slice(0, 10).map(book => {
						const id = book.id[0];
						const title = book.title[0];

						return <li key={id}>{title}</li>;
					});

					this.setState({
						title,
						author,
						publisher,
						description,
						avgRating,
						rateValue,
						ratingsCount,
						reviewsCount,
						similarBooks
					});
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		const {
			title,
			author,
			publisher,
			description,
			avgRating,
			rateValue,
			ratingsCount,
			reviewsCount,
			similarBooks
		} = this.state;

		return (
			<div className="bookpage-container layout-container">
				<Title level={3}>{title}</Title>
				<div>
					<Text strong>by {author}</Text>
				</div>
				<div>
					<Text>{publisher}</Text>
				</div>
				<div>
					<Rate disabled key={`Rate:${rateValue}`} defaultValue={rateValue} />
					<Text>{avgRating}</Text>
					<Text type="warning">{ratingsCount.toLocaleString('en')}</Text>
					<Text>{reviewsCount}</Text>
				</div>
				<div>
					<Text>{parse(description)}</Text>
				</div>
				<div>
					<Title level={4}>Readers also enjoyed</Title>
				</div>
				<ul className="bookpage-similar-books">{similarBooks}</ul>
			</div>
		);
	}
}

export default BookPage;
