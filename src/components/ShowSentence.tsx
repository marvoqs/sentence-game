import React from 'react';
import { connect } from 'react-redux';

type ShowSentenceProps = {
  sentence: Sentence;
};

const mapStateToProps = (state: SentenceState) => ({
  sentence: state.sentence,
});

const ShowSentence: React.FC<ShowSentenceProps> = ({ sentence }) => {
  return <div>Show Sentence</div>;
};

export default connect(mapStateToProps, {})(ShowSentence);
