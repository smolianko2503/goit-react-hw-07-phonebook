import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContactsValue = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <div>
      <label>Find Contacts by name</label>
      <FilterInput type="text" value={filter} onChange={filterContactsValue} />
    </div>
  );
};


