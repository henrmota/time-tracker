import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'
import actions from '../../actions'
import Counter from '../presentation/Counter'

class TimeTracker extends Component {
    startCounter(event) {
        event.preventDefault();
        this.props.startCounter();
    }

    stopCounter(event) {
        event.preventDefault();
        let tracker = this.props.tracker
        let newItem = {name: tracker.name, start_time: tracker.start_time, end_time: tracker.end_time}
        this.props.stopCounter(newItem, this.props.selected_filter);
    }

    onNameBlur(event) {
        this.props.changeTrackerName(event.target.value)
    }

    renderNotActiveCounter() {
        return (
            <div className='time-tracker'>
                <Input className="input" type='text' label='Name' name='name' onBlur={this.onNameBlur.bind(this)} defaultValue={this.props.tracker.name}/>    
                <Counter/> 
                <Button label='Start' raised onClick={this.startCounter.bind(this)}/> 
            </div>
        )
    }

    renderActiveCounter() {

        return(
            <div className='time-tracker'>
                <Input className="input" type='text' label='Name' name='name' onBlur={this.onNameBlur.bind(this)} defaultValue={this.props.tracker.name}/>    
                <Counter 
                    start_time={this.props.tracker.start_time}
                    end_time={this.props.tracker.end_time}
                    />
                <Button label='Stop' className="stop" raised onClick={this.stopCounter.bind(this)}/> 
            </div>
        )
    }

    render() {
        if (this.props.tracker.active === true) {
            return this.renderActiveCounter();
        }
      
        return this.renderNotActiveCounter();
    }
}

const stateToProps = (state) => {
    return {
        tracker: state.time_sessions.tracker,
        selected_filter: state.time_sessions.context_filter
	}
}

const dispatchToProps = (dispatch) => {
	return {
        startCounter: () =>  dispatch(actions.startCounter()),
        changeTrackerName: (name) => dispatch(actions.changeTrackerName(name)), 
        stopCounter: (item, filter) => dispatch(actions.stopCounter(item, filter))
	}
}

export default connect(stateToProps, dispatchToProps)(TimeTracker)
