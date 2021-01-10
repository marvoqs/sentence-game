import { UPDATE_SENTENCE, EDIT_SENTENCE, REMOVE_SENTENCE } from './actionTypes';

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
        sentence: action.sentence,
      };
    case EDIT_SENTENCE:
      return {
        ...state,
        edit: true,
      };
    case REMOVE_SENTENCE:
      return {
        edit: true,
        sentence: defaultSentence,
      };
    default:
      return state;
  }
};

export default reducer;
