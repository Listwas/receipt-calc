// import s from './listItems.module.css'
import PropTypes from 'prop-types'

const ListItems = ({items}) => {
   
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ListItems;