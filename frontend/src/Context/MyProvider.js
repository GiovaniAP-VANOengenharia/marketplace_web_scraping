import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState({});
  const [cat, setCat] = useState([]);
  const [search, setSearch] = useState('');

  const providerValue = useMemo(() => (
    { 
      data,
      setData,
      search,
      setSearch,
      cat,
      setCat,
    }
  ), [data, cat, search,]);

  return (
    <MyContext.Provider value={ providerValue }>
      {children}
    </MyContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
