import React, { Component } from 'react'
import {Tab, Tabs} from 'react-toolbox';
import { connect } from 'react-redux'
import actions from '../../actions'
import TimeSession from '../presentation/TimeSession'

class TimeSessionsList extends Component {
    
    componentDidMount() {
        this.props.listItems(this.props.selected_filter)
    }
   
    changeName(id, name) {
        this.props.changeName(id, name, this.props.selected_filter)
    }

    render() {
        if (this.props.items.length === 0) {
            return (
                <h2>No tasks for {this.props.context_filter}</h2>
            )
        }
        const items = this.props.items.map((item, i) => {
            let key = `ts-${item.id}`
            return(
	    		<div key={key} className="col-md-4">
	    			<TimeSession onChange={this.changeName.bind(this)} item={item}/>
			    </div>
	    	)
        })
            
       return( 
           <div className="container">
                <div className="row">
                    {items}
                </div>
           </div>
       )
    }
}

const stateToProps = (state) => {
	return {
        items: state.time_sessions.items,
        selected_filter: state.time_sessions.context_filter
	}
}

const dispatchToProps = (dispatch) => {
	return {
        listItems: (filter) => dispatch(actions.listItems(filter)),
        changeName: (id, name, filter) => dispatch(actions.changeName(id, name, filter))
	}
}

export default connect(stateToProps, dispatchToProps)(TimeSessionsList)
