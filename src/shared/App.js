/**
 * DEPENDENCIES
 */
import React from 'react';
import Search from '../js/components/Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Layout, Button } from 'antd';

const history = createMemoryHistory();
const { Header, Footer } = Layout;

/**
 * COMPONENTS
 */
import HomePage from '../js/pages/HomePage';
import BookPage from '../js/pages/BookPage';

/**
 * CONSTANTS
 */
import * as ROUTES from '../js/const/routes';
import Book from './Book';

const App = () => (
	// <Router history={history} basename={process.env.PUBLIC_URL}>
	// 	<Layout className="layout">
	// 		<Header className="topbar">
	// 			<div className="topbar-inner-container">
	// 				<Link to={ROUTES.HOME} className="topbar-logo">
	// 					<div>
	// 						<img src="./assets/logo.png" />
	// 					</div>
	// 					<div className="topbar-logo-text">Readyr</div>
	// 				</Link>
	// 				<div className="topbar-nav-search-container">
	// 					<Search />
	// 				</div>
	// 			</div>
	// 		</Header>
	<Book data={this.props.data} />
	// 		<Route exact path={ROUTES.HOME} component={HomePage} />
	// 		<Route path={`${ROUTES.BOOK}/:bookId`} component={BookPage} />
	// 		<Footer style={{ padding: '64px 0' }}>
	// 			<div className="layout-container">
	// 				<div>Readyr</div>
	// 			</div>
	// 		</Footer>
	// 	</Layout>
	// </Router>
);

export default App;
