import styled from 'styled-components';
import { Button, Input, Select } from '../common';
import { useData } from '../providers';

export function Filters({ filters, setFilters }) {
  const { setActivePage } = useData();

  const handleFilterChange = (filter, event) => {
    setFilters({ ...filters, [filter]: event.target.value });
    setActivePage(0);
  };

  const handleApply = () => {
    setActivePage(0);
  };

  const handleClear = () => {
    setFilters({
      name: '',
      status: '',
      species: '',
      gender: '',
      type: ''
    });
    setActivePage(0);
  };

  return (
    <StyledFilters>
      <Select
        options={[
          { label: 'Alive', value: 'alive' },
          { label: 'Dead', value: 'dead' },
          { label: 'Unknown', value: 'unknown' }
        ]}
        placeholder="Status"
        value={filters.status}
        onChange={(event) => handleFilterChange('status', event)}
      />
      <Select
        options={[
          { label: 'Human', value: 'human' },
          { label: 'Alien', value: 'alien' }
        ]}
        placeholder="Species"
        onChange={(event) => handleFilterChange('species', event)}
        value={filters.species}
      />
      <Select
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' }
        ]}
        placeholder="Gender"
        onChange={(event) => handleFilterChange('gender', event)}
        value={filters.gender}
      />
      <Input
        placeholder="Name"
        onChange={(event) => handleFilterChange('name', event)}
        value={filters.name}
      />
      <Input
        placeholder="Type"
        onChange={(event) => handleFilterChange('type', event)}
        value={filters.type}
      />
      <ActionContainer>
        <Button onClick={handleApply}>Apply</Button>
        <ResetButton color="red" backgroundColor="red" onClick={handleClear}>
          Reset
        </ResetButton>
      </ActionContainer>
    </StyledFilters>
  );
}
const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ResetButton = styled(Button)`
  &:hover {
    background-color: red;
    color: white;
  }
`;
const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 10px;
  width: 500px;
`;
