import styled from 'styled-components';

export function Button({ children, className, ...props }) {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${({ width }) => width || '100%'};
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
  color: ${({ color }) => color || '#83bf46'};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({ color }) => color || '#83bf46'};
  outline: none;
  &:hover {
    background-color: #83bf46;
    color: ${({ color }) => color || '#fff'};
    transition: background-color 0.3s ease-in-out;
  }
`;
