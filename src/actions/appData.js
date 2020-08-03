const { actionTypes } = require('../utils/consts');

const { CHANGE_IMAGE, CHANGE_FINGERPRINT, CHANGE_ID } = actionTypes;

export const changeImage = (imgSrc) => ({
  type: CHANGE_IMAGE,
  payload: imgSrc,
});

export const changeFingerprint = (fingerprintSrc) => ({
  type: CHANGE_FINGERPRINT,
  payload: fingerprintSrc,
});

export const changeId = (idSrc) => ({
  type: CHANGE_ID,
  payload: idSrc,
});

export const resetImage = () => ({
  type: CHANGE_IMAGE,
  payload: '',
});

export const resetFingerprint = () => ({
  type: CHANGE_FINGERPRINT,
  payload: '',
});

export const resetId = () => ({
  type: CHANGE_ID,
  payload: '',
});
