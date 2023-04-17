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
  const { data, setData, search, setSearch } = useContext(MyContext);

  const web = ['Web', 'Todas', 'MercadoLivre', 'Buscapé'];
  const categories = ['Categorias', 'Geladeira', 'TV', 'Celular'];

  useEffect(() => {
    if (data.web && data.category && search !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [data, search]);

  const resolveData = () => {
    const toSend = data.web.map((send: string, index: number) => (
      {
        web: send,
        url: data.url[index],
        category: data.category,
      }
    ));
    return toSend;
  };

  const Search = async () => {
    const toSend = resolveData();
    const result = await requestData('/products', toSend);
    const products = result
      .filter((product: IProducts) => product.description.toLowerCase().includes(search.toLowerCase()));
    setProductsArray(products);
    setSearch('');
    setData({});
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
        { productsArray.length > 0 && productsArray.map((product: IProducts, i: number) => (
              <ProductCard productData={ { ...product, key: i } } key={ i } />
            ))}
        </Products>
      </AppContainer>
  );
}

export default App;
