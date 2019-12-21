/**
 * DEPENDENCIES
 */
import React from 'react';
import Search from './components/Search';
import { HashRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';

const history = createBrowserHistory();
const { Header, Footer } = Layout;

/**
 * COMPONENTS
 */
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';

/**
 * CONSTANTS
 */
import * as ROUTES from './const/routes';

const App = () => (
	<HashRouter history={history}>
		<Layout className="layout">
			<Header className="topbar">
				<div className="topbar-inner-container">
					<Link to={ROUTES.HOME}>
						<div className="logo">Readyr</div>
					</Link>
					<div className="topbar-nav-search-container">
						<Navigation />
						<Search />
					</div>
				</div>
			</Header>
			<Route exact path={ROUTES.HOME} component={HomePage} />
			<Route path={`${ROUTES.BOOK}/:bookId`} component={BookPage} />
			<Footer style={{ padding: '64px 0' }}>
				<div className="layout-container">
					<div>Readyr.io</div>
				</div>
			</Footer>
		</Layout>
	</HashRouter>
);

export default App;
