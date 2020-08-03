import { actionTypes } from '../utils/consts';

const { CHANGE_IMAGE, CHANGE_FINGERPRINT, CHANGE_ID } = actionTypes;

const initialState = {
  imgSrc: '',
  fingerprintSrc: '',
  idSrc: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      return {
        ...state,
        imgSrc: action.payload,
      };
    case CHANGE_FINGERPRINT:
      return {
        ...state,
        fingerprintSrc: action.payload,
      };
    case CHANGE_ID:
      return {
        ...state,
        idSrc: action.payload,
      };
    default:
      return state;
  }
};
