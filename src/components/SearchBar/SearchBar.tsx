import './searchBar.css';

export default function SearchBar({...props}) {

    return (
        <section className="search">
            <p>Search...</p>
            <input type="search"
                   onChange={(event) => {
                       props.setSearchInput(event.target.value);
                   }}
            />
        </section>
    );

}