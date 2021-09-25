import { uiSlice } from './ui.slice';
import { takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

function* setBasicUiChange(): SagaIterator {}

export function* uiSaga(): SagaIterator {
  yield takeLatest(uiSlice.actions.setBasicUiChange.type, setBasicUiChange);
}
