import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editSentence, clearSentence } from '../store/actions';

// Show Sentence Component
const ShowSentence: React.FC = () => {
  const dispatch = useDispatch();
  const { who, what, when, where } = useSelector((state: SentenceState) => state.sentence);
  return (
    <div>
      <div className='sentence'>{`${who.charAt(0).toUpperCase()}${who.slice(1)} ${what} ${where} ${when}.`}</div>
      <button onClick={() => dispatch(editSentence())}>Edit sentence</button>
      <button onClick={() => dispatch(clearSentence())}>Create new sentence</button>
    </div>
  );
};

export default ShowSentence;
