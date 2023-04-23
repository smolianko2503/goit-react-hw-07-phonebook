import { List, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

import { getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';

export const ContactItem = ({ item: { name, phone, id } }) => {
  
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <List>
        {name}: {phone}
        <ButtonDelete
          type="button"
          disabled={isLoading}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ButtonDelete>
      </List>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
