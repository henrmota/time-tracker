import actions from '../actions'
import constants from '../constants'
import {Observable} from 'rxjs/Observable'
import 'rxjs';

export default action$ => {
  return action$.ofType(constants.ADD_ITEM)
    .mergeMap(action => 
        Observable
        .ajax(
            {
                url: constants.TIME_SESSION_NEW_URL, 
                body: JSON.stringify(action.item), 
                crossDomain: true,
                method: 'POST',
                createXHR: function () {
                    return new XMLHttpRequest();
                }
            }
         )
        .map(response =>
             actions.listItems(action.filter)
        )
    )
    
};
