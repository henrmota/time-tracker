import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './Nav.scss';
import moment from 'moment'

export default (props) => {
    let now = moment().format(); 
    let counter = moment.utc(moment(props.end_time || now)
        .diff(moment(props.start_time || now)))
        .format("HH:mm:ss")

	return (
        <div className="counter">
            {counter}
		</div>
		
	)
};
