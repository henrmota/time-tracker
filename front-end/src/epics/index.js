import { combineEpics } from 'redux-observable';
import startCounter from './startCounter'
import stopCounter from './stopCounter'
import listTimeSessions from './listTimeSessions'
import addTimeSession from './addTimeSession'
import changeTimeSessionName from './changeTimeSessionName'

export default combineEpics(

    startCounter,
    stopCounter,
    addTimeSession,
    listTimeSessions,
    changeTimeSessionName
);
