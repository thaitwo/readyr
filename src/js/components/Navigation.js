/**
 * DEPENDENCIES
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

/**
 * CONSTANTS
 */
import * as ROUTES from '../const/routes';

const Navigation = () => (
	<Menu mode="horizontal" theme="light" style={{ lineHeight: '64px' }}>
		<Menu.Item key="1">
			<Link to={ROUTES.HOME}>Home</Link>
		</Menu.Item>
		<Menu.Item key="2">My Books</Menu.Item>
	</Menu>
);

export default Navigation;
