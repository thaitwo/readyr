/**
 * DEPENDENCIES
 */
import React from 'react';
import Search from './components/Search';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Button } from 'antd';

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
	<Router history={history} basename={process.env.PUBLIC_URL}>
		<Layout className="layout">
			<Header className="topbar">
				<div className="topbar-inner-container">
					<Link to={ROUTES.HOME} className="topbar-logo">
						<div>
							<img src="./assets/logo.png" />
						</div>
						<div className="topbar-logo-text">Readyr</div>
					</Link>
					<div className="topbar-nav-search-container">
						<Search />
					</div>
				</div>
			</Header>
			<Route exact path={ROUTES.HOME} component={HomePage} />
			<Route path={`${ROUTES.BOOK}/:bookId`} component={BookPage} />
			<Footer style={{ padding: '64px 0' }}>
				<div className="layout-container">
					<div>Readyr</div>
				</div>
			</Footer>
		</Layout>
	</Router>
);

export default App;
