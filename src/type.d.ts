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

type DispatchType = (args: SentenceAction) => SentenceAction;
