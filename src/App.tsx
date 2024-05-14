import React, { useState } from 'react';
import CustomInput from './components/CustomInput/CustomInput';
import { Container, Typography } from './components/CustomInput/CustomInput.styles';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <CustomInput
        label="Your Label"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        helperText="This is a helper text"
      />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Input value: {inputValue}
      </Typography>
    </Container>
  );
};

export default App;
