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
import { popNonfiction } from '../data/popNonfiction';
import { newFiction } from '../data/newFiction';
import { newNonfiction } from '../data/newNonfiction';
import { newMemoir } from '../data/newMemoir';

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
						<Title level={3}>Popular Nonfiction</Title>
						<BooksList books={popNonfiction} />
						<Title level={3}>New Releases Nonfiction</Title>
						<BooksList books={newNonfiction} />
						<Title level={3}>New Releases Fiction</Title>
						<BooksList books={newFiction} />
						<Title level={3}>New Releases Memoir</Title>
						<BooksList books={newMemoir} />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default HomePage;
