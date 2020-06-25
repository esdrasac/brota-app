export function loadFeedRequest() {
  return {
    type: '@feed/LOAD_FEED_REQUEST',
  }
}

export function postFeedRequest(content) {
  return {
    type: '@feed/POST_FEED_REQUEST',
    payload: { content }
  }
}

export function likeFeedRequest(id) {
  return {
    type: '@feed/LIKE_FEED_REQUEST',
    payload: { id }
  }
}

export function loadFeedSuccess(data) {
  return {
    type: '@feed/LOAD_FEED_SUCCESS',
    payload: { data }
  }
}

export function postFeedSuccess(data) {
  return {
    type: '@feed/POST_FEED_SUCCESS',
    payload: { data }
  }
}

export function likeFeedSuccess(data) {
  return {
    type: '@feed/LIKE_FEED_SUCCESS',
    payload: { data }
  }
}

export function loadFeedFailure() {
  return {
    type: '@feed/LOAD_FEED_FAILURE',
  }
}
