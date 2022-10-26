import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

// const INITIAL_STATE = { nome: 'x', idade: 100 };

function AppProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      try {
        const responseApi = await fetch('https://swapi.dev/api/planets');
        const { results } = await responseApi.json();
        setData(results);
      } catch (e) {
        throw new Error(e.message);
      }
    };
    requestApi();
  }, []);

  const contexto = useMemo(() => ({
    data }), [data]);

  return <AppContext.Provider value={ contexto }>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
