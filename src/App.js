import styled from 'styled-components';
import { AppState, Header, ItemsGrid, Pagination, useData } from './components';
import { Filters } from './components/filters';

export function App() {
  const { isFetching, isError, filters, setFilters, characters } = useData();

  return (
    <Main>
      <Header />

      <Filters filters={filters} setFilters={setFilters} />
      <AppState />
      {!isFetching && !isError && (
        <>
          <ItemsGrid characters={characters} />
          <Pagination />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 95%;
  }

  @media (max-width: 930px) {
    max-width: 85%;
  }

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;
