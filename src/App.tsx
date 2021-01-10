import React from 'react';
import { connect } from 'react-redux';

//Components
import ComposeSentence from './components/ComposeSentence';
import ShowSentence from './components/ShowSentence';

type AppProps = {
  edit: boolean;
};

const mapStateToProps = (state: SentenceState): AppProps => ({
  edit: state.edit,
});

const App: React.FC<AppProps> = ({ edit }) => {
  return (
    <div className='container'>
      <h1>Sentence Composer</h1>
      {edit ? <ComposeSentence /> : <ShowSentence />}
    </div>
  );
};

export default connect(mapStateToProps, {})(App);
