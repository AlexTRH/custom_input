# Custom Input Library

A reusable custom input component styled like MUI's Text Field.

## Installation
```bash
npm install custom-input-library-alex
```

## Usage 

````
import React, { useState } from 'react';
import { CustomInput } from 'custom-input-library';

const App: React.FC = () => {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setInputValue(event.target.value);
};

return (
<div>
<h1>Custom Input Component</h1>
<CustomInput
label="Your Label"
value={inputValue}
onChange={handleInputChange}
placeholder="Type something..."
helperText="This is a helper text"
/>
</div>
);
};

export default App;
````






