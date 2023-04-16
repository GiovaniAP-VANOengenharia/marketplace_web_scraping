import { useContext, useEffect, useState } from 'react';
import { AppContainer, Header, Products } from './App.styles'
import { requestData } from './services/requests';
import Dropdown from './components/Dropdown';
import ProductCard from './components/ProductCard';
import IProducts from './interfaces';
import MyContext from './Context/MyContext';

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [theme, setTheme] = useState('light');
  const { market, setMarket, category, setCategory, search, setSearch } = useContext(MyContext);

  const web = ['Web', 'Todas', 'MercadoLivre', 'Buscapé'];
  const categories = ['Categorias', 'Geladeira', 'TV', 'Celular'];

  useEffect(() => {
    if (market !== 'Web' && category !== 'Categories' && search !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [market, category, search]);

  const Search = async () => {
    const result = await requestData('/products');
    console.log('result', result);
    setProductsArray(result);
    setSearch('');
    setMarket('Web');
    setCategory('Categories')
  }

  return (
      <AppContainer>
        <Header>
          <div>
            <Dropdown props={ web } />
            <Dropdown props={ categories } />
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
