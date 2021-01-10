import { UPDATE_SENTENCE, EDIT_SENTENCE, REMOVE_SENTENCE } from './actionTypes';

interface Sentence {
  who: string;
  what: string;
  when: string;
  where: string;
}

interface SentenceState {
  edit: boolean;
  sentence: Sentence;
}

interface SentenceAction {
  type: string;
  sentence: Sentence;
}

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

export const reducer = (state: SentenceState = defaultState, action: SentenceAction): SentenceState => {
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
