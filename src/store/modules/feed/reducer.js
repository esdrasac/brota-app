import { produce } from 'immer';

const INITIAL_STATE = {
  posts: null,
  responsePost: null,
  responseLike: null,
};

export default function feed(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@feed/LOAD_FEED_SUCCESS': {
        draft.posts = action.payload.data;
        break;
      }
      case '@feed/POST_FEED_SUCCESS': {
        console.log(action.payload.data)
        draft.responsePost = action.payload.data;
        break;
      }
      case '@feed/LIKE_FEED_SUCCESS': {
        console.log(action.payload.data)
        draft.responseLike = action.payload.data;
        break;
      }
      default:
    }
  });
}
