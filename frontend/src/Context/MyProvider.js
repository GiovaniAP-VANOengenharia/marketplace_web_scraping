import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [market, setMarket] = useState('Web');
  const [category, setCategory] = useState('Categories');
  const [search, setSearch] = useState('')

  const providerValue = useMemo(() => (
    { 
      market,
      setMarket,
      category,
      setCategory,
      search,
      setSearch,
    }
  ), [market, category, search]);

  return (
    <MyContext.Provider value={ providerValue }>
      {children}
    </MyContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
