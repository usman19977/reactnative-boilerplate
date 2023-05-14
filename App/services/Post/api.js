import axios from 'axios';
import {JSON_PLACEHOLDER_FAKE_API_MOCK} from '../index';

/**
 * @author Usman Bashir
 * @function getPost
 * @description Call getPost Endpoint to get posts
 * @returns Posts
 */
export const getPost = async () => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_FAKE_API_MOCK}posts`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
