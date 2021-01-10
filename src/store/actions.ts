import { UPDATE_SENTENCE, EDIT_SENTENCE, REMOVE_SENTENCE } from './types';

export const updateSentence = (sentence: Sentence): SentenceAction => ({
  type: UPDATE_SENTENCE,
  sentence,
});
