import React from 'react';
import { connect } from 'react-redux';
import { editSentence, clearSentence } from '../store/actions';

interface Props {}

interface LinkStateProps {
  sentence: Sentence;
}

interface LinkDispatchProps {
  editSentence: () => void;
  clearSentence: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: SentenceState): LinkStateProps => ({
  sentence: state.sentence,
});

const ShowSentence: React.FC<LinkProps> = ({ sentence: { who, what, when, where }, editSentence, clearSentence }) => {
  return (
    <div>
      {`${who} ${what} ${where} ${when}`}
      <button onClick={editSentence}>Edit sentence</button>
      <button onClick={clearSentence}>Create new sentence</button>
    </div>
  );
};

export default connect(mapStateToProps, { editSentence, clearSentence })(ShowSentence);
