/**
 * DEPENDENCIES
 */
import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { parseString } from 'xml2js';
import { Typography, Rate, Row, Col, Skeleton, Spin } from 'antd';
const { Title, Text, Paragraph } = Typography;

/**
 * CONSTANTS
 */
import { API_BASE_URL, CROSS_ORIGIN_URL } from '../const/api';
import * as ROUTES from '../const/routes';

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
			ratingsCount: '',
			reviewsCount: '',
			imgUrl: '',
			similarBooks: [],
			loading: false
		};
	}

	componentDidMount() {
		this.getBook();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
			this.getBook();
		}
	}

	getBook() {
		this.setState({ loading: true });
		const bookId = this.props.match.params.bookId;

		axios
			.get(`${CROSS_ORIGIN_URL}/${API_BASE_URL}/book/show.xml`, {
				params: {
					key: process.env.GOODREADS_API_KEY,
					id: bookId
				}
			})
			.then(xml => {
				parseString(xml.data, (err, result) => {
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

					let similarBooks = book.slice(0, 10).map(book => {
						const id = book.id[0];
						const title = book.title[0];

						return (
							<li key={id}>
								<Link to={`${ROUTES.BOOK}/${id}`}>{title}</Link>
							</li>
						);
					});

					this.setState({
						title,
						author,
						publisher,
						description,
						avgRating,
						ratingsCount,
						reviewsCount,
						imgUrl,
						similarBooks,
						loading: false
					});
				});
			})
			.catch(err => console.log(err));
	}

	renderBookData() {
		let { title, author, description, avgRating, ratingsCount, reviewsCount } = this.state;
		ratingsCount = Number(ratingsCount).toLocaleString('en');
		reviewsCount = Number(reviewsCount).toLocaleString('en');
		const rateValue = Math.round(Number(avgRating));
		let titleContent, authorContent, descriptionContent, ratingsContent;

		if (title) {
			titleContent = <Title level={3}>{title}</Title>;
		}

		if (author) {
			authorContent = (
				<div>
					<Text strong>by {author}</Text>
				</div>
			);
		}

		if (avgRating) {
			ratingsContent = (
				<div className="bookpage-ratings-container">
					<Rate disabled key={`Rate:${rateValue}`} defaultValue={rateValue} />
					<Text strong>{avgRating}</Text>
					<Text type="warning">{String(ratingsCount)} ratings</Text>
					<Text type="warning">{String(reviewsCount)} reviews</Text>
				</div>
			);
		}

		if (description) {
			descriptionContent = (
				<div className="bookpage-description">
					<Paragraph>{parse(description)}</Paragraph>
				</div>
			);
		}

		return (
			<div>
				{titleContent}
				{authorContent}
				{ratingsContent}
				{descriptionContent}
			</div>
		);
	}

	renderBookImagePublisher() {
		const { imgUrl, publisher } = this.state;
		let imgContent, publisherContent;

		if (imgUrl) {
			imgContent = <img src={imgUrl} className="bookpage-image" />;
		}

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
			<div>
				{imgContent}
				{publisherContent}
			</div>
		);
	}

	renderSimilarBooks() {
		const { similarBooks } = this.state;

		if (similarBooks) {
			return (
				<div>
					<Title level={4}>Readers also enjoyed...</Title>
					<ul className="bookpage-similar-books">{similarBooks}</ul>
				</div>
			);
		}
	}

	render() {
		const { loading } = this.state;

		return (
			<div className="bookpage-container layout-container">
				<Row type="flex" justify="start" gutter={[0, 80]}>
					<Col span={5}>{loading ? <Spin size="large" /> : this.renderBookImagePublisher()}</Col>
					<Col span={12}>{loading ? <Skeleton active /> : this.renderBookData()}</Col>
				</Row>
				<Row gutter={[0, 80]}>
					<Col span={12} offset={5}>
						{loading ? <Skeleton active /> : this.renderSimilarBooks()}
					</Col>
				</Row>
			</div>
		);
	}
}

export default BookPage;
