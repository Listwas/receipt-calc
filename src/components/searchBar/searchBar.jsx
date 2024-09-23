import s from './searchBar.module.css'
import {useState} from "react";
import PropTypes from 'prop-types'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({onSearch}) => {
    
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
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
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;

