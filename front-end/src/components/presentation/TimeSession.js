import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import theme from './TimeSession.scss';
import Counter from './Counter';
import moment from 'moment';
import Moment from 'react-moment';

export default (props) => {
	let onBlur = (id, event) => {
		event.preventDefault();
		props.onChange(id, event.target.value)
	}
	return (
		<Card className="time-session" theme={theme}>
			<CardMedia
				aspectRatio="wide"
				children={<Counter start_time={props.item.start_time} end_time={props.item.end_time}/>}
				/>
			<CardTitle
				children={<Input type='text' label='Name' name='name' onBlur={onBlur.bind(this, props.item.id)} defaultValue={props.item.name}/>}
				subtitle={<Moment fromNow>{props.item.start_time}</Moment>}
				/>
		</Card>
	)
}

