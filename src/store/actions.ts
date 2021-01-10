import { UPDATE_SENTENCE, EDIT_SENTENCE, REMOVE_SENTENCE } from './types';

export const updateSentence = (sentence: Sentence): SentenceAction => ({
  type: UPDATE_SENTENCE,
  sentence,
});

export const editSentence = (): SentenceAction => ({
  type: EDIT_SENTENCE,
});

export const removeSentence = (): SentenceAction => ({
  type: REMOVE_SENTENCE,
});
