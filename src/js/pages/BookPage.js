/**
 * DEPENDENCIES
 */
import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { parseString } from 'xml2js';
import { Typography, Rate, Row, Col } from 'antd';
const { Title, Text, Paragraph } = Typography;

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
			imgUrl: '',
			similarBooks: []
		};
	}

	componentDidMount() {
		this.getBook();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
			this.getBook();
		}
	}

	getBook() {
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
						image_url: [imgUrl],
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
						imgUrl,
						similarBooks
					});
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		let {
			title,
			author,
			publisher,
			description,
			avgRating,
			rateValue,
			ratingsCount,
			reviewsCount,
			imgUrl,
			similarBooks
		} = this.state;
		let publisherContent;

		ratingsCount = Number(ratingsCount).toLocaleString('en');
		reviewsCount = Number(reviewsCount).toLocaleString('en');

		if (publisher) {
			publisherContent = (
				<div>
					<div>
						<Text type="secondary">Published by</Text>
					</div>
					<Text strong>{publisher}</Text>
				</div>
			);
		}

		return (
			<div className="bookpage-container layout-container">
				<Row type="flex" justify="start" gutter={[0, 80]}>
					<Col span={5}>
						<img src={imgUrl} className="bookpage-image" />
						{publisherContent}
					</Col>
					<Col span={12}>
						<Title level={3}>{title}</Title>
						<div>
							<Text strong>by {author}</Text>
						</div>
						<div className="bookpage-ratings-container">
							<Rate disabled key={`Rate:${rateValue}`} defaultValue={rateValue} />
							<Text strong>{avgRating}</Text>
							<Text type="warning">{String(ratingsCount)} ratings</Text>
							<Text type="warning">{String(reviewsCount)} reviews</Text>
						</div>
						<div className="bookpage-description">
							<Paragraph>{parse(description)}</Paragraph>
						</div>
					</Col>
				</Row>
				<Row gutter={[0, 80]}>
					<Col span={12} offset={5}>
						<Title level={4}>Readers also enjoyed...</Title>
						<ul className="bookpage-similar-books">{similarBooks}</ul>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BookPage;
