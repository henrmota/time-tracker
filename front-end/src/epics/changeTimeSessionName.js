import actions from '../actions'
import constants from '../constants'
import {Observable} from 'rxjs/Observable'
import 'rxjs';

export default action$ => {
  return action$.ofType(constants.CHANGE_NAME)
    .mergeMap(action => 
        Observable
        .ajax(
            {
                url: constants.TIME_SESSION_UPDATE_NAME_URL+`${action.id}`, 
                body: JSON.stringify({name: action.name}), 
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
