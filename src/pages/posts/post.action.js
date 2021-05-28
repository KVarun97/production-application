import { getPosts } from "../../services/get-posts.service";
import { deletePost } from "../../services/delete-post.service";
import { addPost } from "../../services/add-post.service";
import {
  GET_POST_ERROR,
  POST_CREATED_ERROR,
  POST_CREATED_SUCCESS,
  POST_DELETED_ERROR,
  POST_DELETED_SUCCESS,
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
} from "../../constants/messages";
import {
  SNACKBAR_OPEN,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  DELETE_POST,
  ADD_POST
} from '../../store/store.actions';
const postStatus = (type, data) => {
  return {
    type,
    data: data,
  };
};

export const getPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(postStatus(GET_POSTS_PENDING));
      const data = await getPosts();
      dispatch(postStatus(GET_POSTS_SUCCESS, data));
    } catch (e) {
      dispatch(
        postStatus(SNACKBAR_OPEN, {
          message: GET_POST_ERROR,
          severity: SNACKBAR_ERROR,
        })
      );
    }
  };
};

export const deletePostAction = (postId) => {
  return async (dispatch) => {
    try {
      const deleteStatus = await deletePost(postId);
      if (deleteStatus.status === 200) {
        dispatch(
          postStatus(SNACKBAR_OPEN, {
            message: POST_DELETED_SUCCESS,
            severity: SNACKBAR_SUCCESS,
          })
        );
        dispatch(postStatus(DELETE_POST, postId))
        // In case of actual api
        // dispatch(postStatus(GET_POSTS_PENDING));
        // const data = await getPosts();
        // dispatch(postStatus(GET_POSTS_SUCCESS, data));
      }
    } catch (e) {
      dispatch(
        postStatus(SNACKBAR_OPEN, {
          message: POST_DELETED_ERROR,
          severity: SNACKBAR_ERROR,
        })
      );
    }
  };
};

export const addPostAction = (postDetails) => {
  return async (dispatch) => {
    try {
      const addPostStatus = await addPost(postDetails);
      if (addPostStatus.status === 201) {
        dispatch(
          postStatus(SNACKBAR_OPEN, {
            message: POST_CREATED_SUCCESS,
            severity: SNACKBAR_SUCCESS,
          })
        );
        dispatch(postStatus(ADD_POST, addPostStatus.data))
         // In case of actual api
        // dispatch(postStatus(GET_POSTS_PENDING));
        // const data = await getPosts();
        // dispatch(postStatus(GET_POSTS_SUCCESS, data));
      }
    } catch (e) {
      dispatch(
        postStatus(SNACKBAR_OPEN, {
          message: POST_CREATED_ERROR,
          severity: SNACKBAR_ERROR,
        })
      );
    }
  };
};
