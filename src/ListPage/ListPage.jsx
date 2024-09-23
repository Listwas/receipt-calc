import s from './ListPage.module.css';
import {useState} from 'react';
import SearchBar from '../components/searchBar/searchBar';
import ListItems from '../components/listItems/listItems';

const ListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const items = ['apple', 'bannanan', 'something', 'prod', 'apple', 'bannanan', 'something', 'prod']

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <>
        <main className={s.center}>
            <div className={s.listContener}>
                <div className={s.left}>
                    <nav className={s.searchBar}> <SearchBar onSearch={setSearchQuery}/> </nav>
                    <div className={s.products}> <ListItems items={filteredItems}/> </div>
                </div>
                <div className={s.right}>list</div>

            </div>
        </main>
      </>
    )
  }

export default ListPage;