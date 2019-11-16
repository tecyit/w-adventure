import authTypes from './auth.types';

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = user => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};
