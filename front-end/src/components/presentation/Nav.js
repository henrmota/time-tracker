import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './Nav.scss';
import {ListTabs, TimeTracker} from '../containers';

export default (props) => {

	return (
		<div>
			<AppBar className="app-bar" fixed theme={theme}>
				<TimeTracker/>
			</AppBar>
			<div className='fixed-placeholder'>
			</div>
		</div>
		
	)
};
