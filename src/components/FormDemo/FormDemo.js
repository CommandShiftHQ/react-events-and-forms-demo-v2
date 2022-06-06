import { useState, useEffect } from 'react';
import { breeds } from '../../data/cat-breeds.js';
import './FormDemo.css';

const FormDemo = () => {
  const [fields, setFields] = useState({});

  const handleOnChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.checked,
    });
  };

  const toKebabCase = (string) => {
    return string.toLowerCase().replace(' ', '-');
  };

  useEffect(() => {
    console.log(fields);
  });

  return (
    <div className="FormDemo">
      <div className="form__field">
        <label>
          What is your cat name?
          <input
            name="name"
            type="text"
            onChange={(event) => handleOnChange(event)}
          />
        </label>
      </div>
      <div className="form__field">
        <label>
          How old is your cat?
          <input
            name="age"
            type="number"
            max={20}
            onChange={(event) => handleOnChange(event)}
          />
        </label>
      </div>
      <div className="form__field">
        <label>
          What breed is your cat?
          <select name="breed" onChange={(event) => handleOnChange(event)}>
            {breeds.cat.map((breed) => (
              <option key={toKebabCase(breed)} value={toKebabCase(breed)}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form__field">
        <label>
          <input
            name="vaccination"
            type="checkbox"
            onChange={(event) => handleCheckboxChange(event)}
          />
          Is your cat vacinated?
        </label>
      </div>
      <div className="form__field">
        <label>
          What is your cat favourite activity?
          <textarea
            name="activity"
            type="text"
            onChange={(event) => handleOnChange(event)}
          />
        </label>
      </div>
    </div>
  );
};

export default FormDemo;
