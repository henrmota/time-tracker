import React from 'react'
import Nav from './Nav'
import { TimeSessionsList, ListTabs } from '../containers'


/* The Users component is a sample container with corresponding reducer
 * and action creators for demonstration. Feel free to remove for your own project */

const items = [
	
]

export default (props) => {
	return (
		<div>
			<Nav/>
			<div>
				<ListTabs/>
				<section>
					<div className="container">
						<TimeSessionsList/>
					</div>
				</section>

			</div>
		</div>
	)
}
