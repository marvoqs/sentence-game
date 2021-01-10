import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSentence } from '../store/actions';

interface Props {}

interface LinkStateProps {
  sentence: Sentence;
}

interface LinkDispatchProps {
  updateSentence: (sentence: Sentence) => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: SentenceState): LinkStateProps => ({
  sentence: state.sentence,
});

const ComposeSentence: React.FC<LinkProps> = ({ sentence, updateSentence }) => {
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
    updateSentence(formData);
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

export default connect(mapStateToProps, { updateSentence })(ComposeSentence);
