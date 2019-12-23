/**
 * DEPENDENCIES
 */
import React from 'react';
import { Layout, Typography } from 'antd';
import BooksList from '../components/BooksList';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

/**
 * CONSTANTS
 */
import { popularBooks } from '../const/popularBooks';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	renderBookList() {}

	render() {
		return (
			<div>
				<Layout className="layout-container">
					<Content className="layout-content">
						<Title level={3}>Popular Non Fiction</Title>
						<BooksList books={popularBooks} />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default HomePage;
