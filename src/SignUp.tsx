import React, { useState } from 'react';
import { Button, TextField, Checkbox, Typography, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';

interface FormState {
    name: string;
    email: string;
    password: string;
    termsAgreed: boolean;
}

function SignUp() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    termsAgreed: false
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" component="h1">Collaboration starts here 🚀</Typography>
      <TextField
        label="Name"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
      />
      <TextField
        type="email"
        label="Email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        value={formState.password}
        onChange={handleInputChange}
      />
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAgreed"
                checked={formState.termsAgreed}
                onChange={handleInputChange}
              />
            }
            label="I agree to Terms of Service and Privacy Policy"
          />
        </FormGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">Create Account</Button>
      <Button variant="text">Already have an account? Sign in instead</Button>
    </form>
  );
}

export default SignUp;
