import actions from '../actions'
import constants from '../constants'
import {Observable} from 'rxjs/Observable'
import 'rxjs';

export default action$ => {
  return action$.ofType(constants.STOP_COUNTER)
    .map(action => actions.addItem(action.item, action.filter))

};
