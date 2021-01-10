import React, { useState } from 'react';
import { connect } from 'react-redux';

type ComposeSentenceProps = {
  sentence: Sentence;
};

const mapStateToProps = (state: SentenceState): ComposeSentenceProps => ({
  sentence: state.sentence,
});

const ComposeSentence: React.FC<ComposeSentenceProps> = ({ sentence }) => {
  const [formData, setFormData] = useState({
    who: '',
    what: '',
    when: '',
    where: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((formData) => ({ ...formData, [e.currentTarget.name]: e.currentTarget.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='who'>Who?</label>
        <input type='text' id='who' name='who' value={formData.who} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor='what'>What?</label>
        <input type='text' id='what' name='what' value={formData.what} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor='when'>When?</label>
        <input type='text' id='when' name='when' value={formData.when} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor='where'>Where?</label>
        <input type='text' id='where' name='where' value={formData.where} onChange={(e) => handleChange(e)} />
      </div>
      <button type='submit'>Compose sentence</button>
    </form>
  );
};

export default connect(mapStateToProps, {})(ComposeSentence);
