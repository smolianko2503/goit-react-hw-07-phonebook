import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container, Spinner } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';

import { RotatingLines } from 'react-loader-spinner';
import { Toaster, toast } from 'react-hot-toast';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Section title={'Phonebook'} />
      <Phonebook />
      <Section title={'Contacts'} />
      <Filter />

      <ContactsList />
      <Spinner>
        {isLoading && !error && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="0.75"
            width="24"
            visible={true}
          />
        )}
      </Spinner>

      {error && toast.error('Sorry, an error occurred...')}
      <GlobalStyle />
    </Container>
  );
};
