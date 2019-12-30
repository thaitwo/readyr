import React from 'react';

class Book extends React.Component {
	render() {
		const book = this.props.data;

		return <div>{book[0].title}</div>;
	}
}

export default Book;
