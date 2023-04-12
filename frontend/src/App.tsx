import { useEffect, useState } from 'react';
import { AppContainer, Header, Products } from './App.styles'

function App() {
  const [market, setMarket] = useState('Web');
  const [category, setCategory] = useState('Categories');
  const [search, setSearch] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (market !== 'Web' && category !== 'Categories' && search !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [market, category, search]);

  const Search = () => {
    setMarket('Web');
    setCategory('Categories')
  }

  return (
    <AppContainer>
      <Header>
        <div>
          <select
            id="web"
            value={ market }
            onChange={ ({ target }) => setMarket(target.value) }
          >
            <option value="Web">Web</option>
            <option value="Todas">Todas</option>
            <option value="MercadoLivre">MercadoLivre</option>
            <option value="Buscapé">Buscapé</option>
          </select>
          <select
            id="category"
            value={ category }
            onChange={ ({ target }) => setCategory(target.value) }
          >
            <option value="Geladeira">Categories</option>
            <option value="Geladeira">Geladeira</option>
            <option value="TV">TV</option>
            <option value="Celular">Celular</option>
          </select>
          <input
              type="text"
              id="search"
              value={ search }
              onChange={ ({ target }) => setSearch(target.value) }
          />
          <button
          type="button"
          onClick={ Search }
          disabled={ isDisabled }
        >
          Search
        </button>
        </div>
      </Header>
      <Products>
        <h2>TESTE2</h2>
      </Products>
    </AppContainer>
  );
}

export default App;
