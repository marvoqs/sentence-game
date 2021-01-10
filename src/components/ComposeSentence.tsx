import React from 'react';
import { connect } from 'react-redux';

type ComposeSentenceProps = {
  sentence: Sentence;
};

const mapStateToProps = (state: SentenceState) => ({
  sentence: state.sentence,
});

const ComposeSentence: React.FC<ComposeSentenceProps> = ({ sentence }) => {
  return <div>Compose Sentence</div>;
};

export default connect(mapStateToProps, {})(ComposeSentence);
