import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { API_URL } from '../../shared/constants';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(`${API_URL}/character`);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    type: ''
  });

  useEffect(() => {
    const URLWithPage = new URL(apiURL);

    URLWithPage.searchParams.set('page', activePage + 1);
    URLWithPage.searchParams.set('name', filters.name);
    URLWithPage.searchParams.set('status', filters.status);
    URLWithPage.searchParams.set('species', filters.species);
    URLWithPage.searchParams.set('gender', filters.gender);
    URLWithPage.searchParams.set('type', filters.type);

    const fetchData = () => {
      setIsFetching(true);
      setIsError(false);

      axios
        .get(URLWithPage.toString())
        .then(({ data }) => {
          setIsFetching(false);
          setCharacters(data.results);
          setInfo(data.info);
        })
        .catch((e) => {
          setIsFetching(false);
          setIsError(true);
          console.error(e);
        })
        .finally(() => {
          setIsFetching(false);
        });
    };
    fetchData(apiURL);
  }, [apiURL, filters, activePage]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      isFetching,
      isError,
      info,
      filters,
      setFilters
    }),
    [
      activePage,
      apiURL,
      characters,
      isFetching,
      isError,
      info,
      filters,
      setFilters
    ]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
