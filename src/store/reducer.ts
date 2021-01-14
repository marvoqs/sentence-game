import { UPDATE_SENTENCE, EDIT_SENTENCE, CLEAR_SENTENCE } from './types';

const defaultSentence: Sentence = {
  who: '',
  what: '',
  when: '',
  where: '',
};

const defaultState: SentenceState = {
  edit: true,
  sentence: defaultSentence,
};

const reducer = (state: SentenceState = defaultState, action: SentenceAction): SentenceState => {
  switch (action.type) {
    case UPDATE_SENTENCE:
      return {
        edit: false,
        sentence: action?.sentence || defaultSentence,
      };
    case EDIT_SENTENCE:
      return {
        ...state,
        edit: true,
      };
    case CLEAR_SENTENCE:
      return {
        edit: true,
        sentence: defaultSentence,
      };
    default:
      return state;
  }
};

export default reducer;
