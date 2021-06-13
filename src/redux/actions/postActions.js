import { PUBLISH_POST, SAVE_POST } from '../types';

export const savePost = () => {
    return {
        type: SAVE_POST,
    };
};
export const publishPost = () => {
    return {
       type: PUBLISH_POST,
    };
};