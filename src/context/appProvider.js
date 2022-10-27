import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

const columnArray = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState(columnArray);
  const [columnFilter, setcolumnFilter] = useState(column[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleColumnFilter = ({ target }) => {
    setcolumnFilter(target.value);
  };

  const handleComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const handleValue = ({ target }) => {
    setValueFilter(target.value);
  };

  const handleFilter = useCallback(() => {
    if (comparisonFilter.includes('maior que')) {
      const filtered = data.filter((e) => Number(e[columnFilter]) > Number(valueFilter));
      setColumn(column.filter((e) => e !== columnFilter));
      setData(filtered);
    } else if (comparisonFilter.includes('menor que')) {
      const filtered = data.filter((e) => Number(e[columnFilter]) < Number(valueFilter));
      setColumn(column.filter((e) => e !== columnFilter));
      setData(filtered);
      console.log('entrou no menor');
    } else if (comparisonFilter.includes('igual a')) {
      const filtered = data
        .filter((e) => Number(e[columnFilter]) === Number(valueFilter));
      setColumn(column.filter((e) => e !== columnFilter));
      setData(filtered);
    }
  }, [columnFilter, data, valueFilter, comparisonFilter, column]);

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

  const contexto = useMemo(
    () => ({
      data,
      name,
      column,
      columnFilter,
      comparisonFilter,
      valueFilter,
      setColumn,
      handleName,
      handleColumnFilter,
      handleComparisonFilter,
      handleValue,
      handleFilter,
    }),
    [data, name, column, columnFilter, comparisonFilter, valueFilter, handleFilter],
  );

  return <AppContext.Provider value={ contexto }>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
