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
  // const [theme, setTheme] = useState('light');
  const { data, setData, setCat, search, setSearch } = useContext(MyContext);

  const web = ['Web', 'Todas', 'MercadoLivre', 'Buscapé'];
  const categories = ['Categorias', 'Geladeira', 'TV', 'Celular'];

  useEffect(() => {
    if (data.web && data.category && search !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
    console.log(data.web, data.category);
  }, [data, search]);

  const Search = async () => {
    const result = await requestData('/products');
    setProductsArray(result);
    setSearch('');
    setData({});
    setCat([]);
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
