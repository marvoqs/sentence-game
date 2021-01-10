import React from 'react';
import { connect } from 'react-redux';

//Components
import ComposeSentence from './components/ComposeSentence';
import ShowSentence from './components/ShowSentence';

type AppProps = {
  edit: boolean;
};

const mapStateToProps = (state: SentenceState) => ({
  edit: state.edit,
});

const App: React.FC<AppProps> = ({ edit }) => {
  return edit ? <ComposeSentence /> : <ShowSentence />;
};

export default connect(mapStateToProps, {})(App);
