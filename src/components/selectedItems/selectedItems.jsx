import PropTypes from 'prop-types';
import s from './selectedItems.module.css'
const SelectedItems = ({ items }) => {
  return (
    <div>
      <ul className={s.listing}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

SelectedItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SelectedItems;