import { useEffect, useState } from 'react';
import { AppContainer, Header, Products } from './App.styles'
import { requestData } from './services/requests';
import Dropdown from './components/Dropdown';
import ProductCard from './components/ProductCard';
import IProducts from './interfaces';

function App() {
  const [market, setMarket] = useState('Web');
  const [category, setCategory] = useState('Categories');
  const [search, setSearch] = useState('');
  const [productsArray, setProductsArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (market !== 'Web' && category !== 'Categories' && search !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [market, category, search]);

  const Search = async () => {
    const result = await requestData('/products');
    console.log('result', result);
    setProductsArray(result);
    setMarket('Web');
    setCategory('Categories')
  }

  return (
    <AppContainer>
      <Header>
        <div>
          <Dropdown options={['Web', 'Todas', 'MercadoLivre', 'Buscapé']} />
          <Dropdown options={['Categorias', 'Geladeira', 'TV', 'Celular']} />
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
      { productsArray.length > 0 && productsArray.map((product: IProducts) => (
            <ProductCard productData={ product } key={ product.id } />
          ))}
      </Products>
    </AppContainer>
  );
}

export default App;
