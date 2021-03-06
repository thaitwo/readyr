/**
 * DEPENDENCIES
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
const { Text } = Typography;

import * as ROUTES from '../const/routes';
import { trimString } from '../utils';

const BooksList = ({ books }) => {
	const booksList = books.map(book => {
		const styles = {
			backgroundImage: `url(./assets/${book.id}.jpg)`,
			backgroundSize: 'cover',
			backgroundPosition: 'top center',
			borderRadius: '4px',
			height: '220px',
			marginBottom: '12px'
		};

		return (
			<li key={book.id}>
				<Link to={`${ROUTES.BOOK}/${book.id}`}>
					<div style={styles}></div>
					<div className="bookslist-card-meta">
						<Text strong>{trimString(book.title, 40)}</Text>
						<Text type="secondary">{book.author}</Text>
					</div>
				</Link>
			</li>
		);
	});

	return <ul className="bookslist">{booksList}</ul>;
};

export default BooksList;
