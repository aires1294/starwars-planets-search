import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

// const INITIAL_STATE = { nome: 'x', idade: 100 };

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  // <tr key={ data.name }>
  // <td>{e.name}</td>
  // <td>{e.rotation_period}</td>
  // <td>{e.orbital_period}</td>
  // <td>{e.diameter}</td>
  // <td>{e.climate}</td>
  // <td>{e.gravity}</td>
  // <td>{e.terrain}</td>
  // <td>{e.surface_water}</td>
  // <td>{e.population}</td>
  // <td>{e.films}</td>
  // <td>{e.created}</td>
  // <td>{e.edited}</td>
  // <td>{e.url}</td>

  const handleName = ({ target }) => {
    setName(target.value);
  };

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
    data, name, handleName }), [data, name]);

  return <AppContext.Provider value={ contexto }>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
