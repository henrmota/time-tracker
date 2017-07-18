import actions from '../actions'
import constants from '../constants'
import {Observable} from 'rxjs/Observable'
import 'rxjs';

export default action$ => {
  return action$.ofType(constants.LIST_ITEMS, constants.SELECTED_FILTER)
    .mergeMap(action => 
        Observable.ajax({url: constants.TIME_SESSION_GET_URL+action.filter, crossDomain: true}).map(response =>
             actions.replaceItems(response.response.items)
        )
    )
};
