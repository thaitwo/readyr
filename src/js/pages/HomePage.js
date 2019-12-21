/**
 * DEPENDENCIES
 */
import React from 'react';
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Layout className="layout-container">
					<Content className="layout-content">
						<h2>Welcome to Readyr</h2>
						<Button type="primary">Sign In</Button>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default HomePage;
