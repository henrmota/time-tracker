import actions from '../actions'
import constants from '../constants'
import {Observable} from 'rxjs/Observable'
import 'rxjs';

export default action$ => {
  return action$.ofType(constants.START_COUNTER)
    .mergeMap(action => 
        Observable.interval(1000).map(action => action)
        .takeUntil(action$.ofType(constants.STOP_COUNTER))
     )
    .mapTo(actions.refreshCounter())
};
