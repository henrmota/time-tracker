import React, { Component } from 'react'
import {Tab, Tabs} from 'react-toolbox';
import { connect } from 'react-redux'
import actions from '../../actions'

const filterOptions = ['day', 'week', 'month'];

class ListTabs extends Component {
    handleTabChange(index){
        this.props.selectFilter(filterOptions[index]);
    }

    getSelectedTab(filterOption) {
        return filterOptions.indexOf(filterOption);
    }

    render() {
        const tabs = filterOptions.map((item,i) => {
            let key = `tab-${i}`
            return (
                <Tab key={key} label={item}></Tab>
            )    
        })

        return( 
           <Tabs className='time-context' index={this.getSelectedTab(this.props.selected_filter)} onChange={this.handleTabChange.bind(this)}>
             {tabs}
            </Tabs>
       )
    }
}

const stateToProps = (state) => {
	return {
		selected_filter: state.time_sessions.context_filter
	}
}

const dispatchToProps = (dispatch) => {
	return {
		selectFilter: (option) => dispatch(actions.selectFilter(option))
	}
}

export default connect(stateToProps, dispatchToProps)(ListTabs)
