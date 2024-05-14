import styled from '@emotion/styled';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const StyledLabel = styled.label`
    margin-bottom: 8px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.54);
`;

export const StyledInput = styled.input`
    padding: 10px 14px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    &:focus {
        border-color: #3f51b5;
        box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
    }
    &:hover {
        border-color: rgba(0, 0, 0, 0.87);
    }
`;

export const StyledHelperText = styled.span`
  margin-top: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`;

export const Container = styled.div`
  margin: 20px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const Typography = styled.div<{ variant: string, gutterBottom?: boolean }>`
  font-size: ${({ variant }) => (variant === 'h4' ? '2rem' : '1rem')};
  margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '16px' : '8px')};
`;

