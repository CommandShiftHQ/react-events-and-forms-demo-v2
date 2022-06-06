import { breeds } from '../../data/cat-breeds.js';
import './FormDemo.css';

const FormDemo = () => {
  const toKebabCase = (string) => {
    return string.toLowerCase().replace(' ', '-');
  };

  return (
    <div className="FormDemo">
      <div className="form__field">
        <label>
          What is your cat name?
          <input type="text" />
        </label>
      </div>
      <div className="form__field">
        <label>
          How old is your cat?
          <input type="number" max={20} />
        </label>
      </div>
      <div className="form__field">
        <label>
          What breed is your cat?
          <select>
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
          <input type="checkbox" />
          Is your cat vacinated?
        </label>
      </div>
      <div className="form__field">
        <label>
          What is your cat favourite activity?
          <textarea />
        </label>
      </div>
    </div>
  );
};

export default FormDemo;
