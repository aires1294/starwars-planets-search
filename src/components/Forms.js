import React, { useContext } from 'react';
import AppContext from '../context/appContext';

export default function Forms() {
  const { name, handleName } = useContext(AppContext);
  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleName }
      />
      Planet Name
    </form>
  );
}
