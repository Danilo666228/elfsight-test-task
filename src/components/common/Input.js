import styled from 'styled-components';

export function Input({ className, ...props }) {
  return <StyledInput className={className} {...props} />;
}

const StyledInput = styled.input`
  width: ${({ width }) => width || '100%'};
  font-family: 'Roboto', sans-serif;
  border: 1px solid #83bf46;
  background-color: #263750;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  outline: none;

  &:hover {
    background-color: #334466;
    transition: background-color 0.3s ease-in-out;
  }
  &:focus {
    border-color: #83bf46;
    background-color: #334466;
    transition: background-color 0.3s ease-in-out;
  }
`;
