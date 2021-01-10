import { UPDATE_SENTENCE, EDIT_SENTENCE, CLEAR_SENTENCE } from './types';

export const updateSentence = (sentence: Sentence): SentenceAction => ({
  type: UPDATE_SENTENCE,
  sentence,
});

export const editSentence = (): SentenceAction => ({
  type: EDIT_SENTENCE,
});

export const clearSentence = (): SentenceAction => ({
  type: CLEAR_SENTENCE,
});
