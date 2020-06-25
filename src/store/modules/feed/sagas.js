import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify'

import { loadFeedSuccess, loadFeedFailure, postFeedSuccess, loadFeedRequest } from './actions';

import api from '../../../services/api'

export function* loadFeed() {
  try {
  const response = yield call(api.get, 'feed')

  yield put(loadFeedSuccess(response.data))
  } catch (err) {
    yield put(loadFeedFailure())
  }
}

export function* postFeed({ payload }) {
  try {
    const post = Object.assign(payload)


  const response = yield call(api.post, 'feed/post', post)
  toast.success('Braba lançada')

  yield put(postFeedSuccess(response.data))
  yield put(loadFeedRequest())

  } catch (err) {
    toast.error('Deu ruim, alguma coisa deu errado')
    yield put(loadFeedFailure())
  }
}

export function* likeFeed({ payload }) {
  try {
    const { id } = Object.assign(payload)

    const response = yield call(api.post, `/feed/${id}/like`)

    yield put(postFeedSuccess(response.data))
    yield put(loadFeedRequest())
  } catch (err) {

  }
}

export default all([
  takeLatest('@feed/LOAD_FEED_REQUEST', loadFeed),
  takeLatest('@feed/POST_FEED_REQUEST', postFeed),
  takeLatest('@feed/LIKE_FEED_REQUEST', likeFeed),
]);
