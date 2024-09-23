import './listItems.module.css'
import PropTypes from 'prop-types'

const ListItems = ({items, onItemClick}) => {
   
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onItemClick(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onItemClick: PropTypes.func.isRequired
}

export default ListItems;