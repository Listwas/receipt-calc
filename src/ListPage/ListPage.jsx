import s from './ListPage.module.css'

function ListPage() {

    return (
      <>
        <main className={s.center}>
            <div className={s.listContener}>
                <div className={s.left}>
                    <nav className={s.searchBar}>search bar</nav>
                    <div className={s.products}>products from memory list</div>
                </div>
                <div className={s.right}>list</div>

            </div>
        </main>
      </>
    )
  }

export default ListPage;