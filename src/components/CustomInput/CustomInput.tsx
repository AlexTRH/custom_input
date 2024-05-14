import React from 'react';
import { InputContainer, StyledInput, StyledLabel, StyledHelperText } from './CustomInput.styles';

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  helperText?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
label,
value,
onChange,
placeholder = '',
type = 'text',
helperText = '',
}) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </InputContainer>
  );
};

export default CustomInput;
