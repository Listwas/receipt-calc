// import s from './searchBar.module.css'
import {useState} from "react";
import PropTypes from 'prop-types'

const SearchBar = ({onSearch}) => {
    
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }
    
    return (
        <>
            <input
                type="text"
                placeholder="search..."
                value={query}
                onChange={handleChange}
            />
        </>
        )    
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;

