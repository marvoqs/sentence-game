import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ComposeSentence from './components/ComposeSentence';
import ShowSentence from './components/ShowSentence';

const App: React.FC = () => {
  const edit = useSelector((state: SentenceState) => state.edit);

  return (
    <div className='container'>
      <h1>Sentence Composer</h1>
      {edit ? <ComposeSentence /> : <ShowSentence />}
    </div>
  );
};

export default App;
