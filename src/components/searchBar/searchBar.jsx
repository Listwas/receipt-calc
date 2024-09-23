import s from './searchBar.module.css'
import PropTypes from 'prop-types'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({query, onSearch}) => {
    
    const handleChange = (e) => {
        onSearch(e.target.value);
    }
    
    return (
        <>
            <div className={s.searchBar}>

            <input 
                type="text"
                placeholder="search..."
                value={query}
                onChange={handleChange}
            />
            <CiSearch className={s.icon}/>
            </div>
        </>
        )    
}

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;

