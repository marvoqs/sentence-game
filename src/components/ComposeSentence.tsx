import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSentence } from '../store/actions';

// Compose Sentence Component
const ComposeSentence: React.FC = () => {
  const dispatch = useDispatch();
  const sentence = useSelector((state: SentenceState) => state.sentence);
  const [formData, setFormData] = useState({
    who: sentence.who,
    what: sentence.what,
    when: sentence.when,
    where: sentence.where,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();

    // Check if the "who" and "what" are filled as required fields
    if (formData.who && formData.what) {
      dispatch(updateSentence(formData));
    } else {
      alert('You have to fill at least who is doing what. The other fields are optional.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-box'>
        <label htmlFor='who'>Who?</label>
        <input type='text' id='who' name='who' value={formData.who} onChange={(e) => handleChange(e)} />
        <label htmlFor='what'>What?</label>
        <input type='text' id='what' name='what' value={formData.what} onChange={(e) => handleChange(e)} />
        <label htmlFor='when'>When?</label>
        <input type='text' id='when' name='when' value={formData.when} onChange={(e) => handleChange(e)} />
        <label htmlFor='where'>Where?</label>
        <input type='text' id='where' name='where' value={formData.where} onChange={(e) => handleChange(e)} />
      </div>
      <button type='submit'>Compose</button>
    </form>
  );
};

export default ComposeSentence;
