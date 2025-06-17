import styled from 'styled-components';

export function Select({
  className,
  options,
  placeholder,
  onChange,
  ...props
}) {
  return (
    <StyledSelect className={className} onChange={onChange} {...props}>
      {placeholder && (
        <StyledPlaceholder hidden>{placeholder}</StyledPlaceholder>
      )}
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

const StyledPlaceholder = styled.option`
  color: #83bf46;
  font-size: 14px;
  font-weight: 600;
`;

const StyledSelect = styled.select`
  font-family: 'Roboto', sans-serif;
  border: 1px solid #83bf46;
  padding: 10px 20px;
  background-color: #263750;
  color: white;
  border-radius: 5px;
`;
const StyledOption = styled.option`
  appearance: none;
  position: relative;
  background-color: #e6f2da;
  color: white;
  color: black;
`;
