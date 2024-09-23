import s from './ListPage.module.css';
import {useState} from 'react';
import SearchBar from '../components/searchBar/searchBar';
import ListItems from '../components/listItems/listItems';

const ListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [items, setItems] = useState(['apple', 'bannanan', 'something', 'prod', 'apple', 'bannanan', 'something', 'prod'])

    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addProduct = () => {
      setItems([...items, searchQuery])
      setSearchQuery('')
    };

    return (
      <>
        <main className={s.center}>
            <div className={s.listContener}>
                <div className={s.left}>
                    <nav className={s.searchBar}> <SearchBar query={searchQuery} onSearch={setSearchQuery}/> </nav>
                    <div className={s.products}> </div>

                    {filteredItems. length === 0 ? (
                      <div className={s.nothingFound}> 
                        <p>no items found!</p>
                        <button onClick={addProduct}>add this item</button>
                      </div> ) : (<ListItems items={filteredItems}/>)
                    }
                  </div>
                <div className={s.right}>list</div>

            </div>
        </main>
      </>
    )
  }

export default ListPage;