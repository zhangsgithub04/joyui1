import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ width: '100%', maxWidth: '400px', margin: 'auto', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
                    Collaboration starts here 🚀
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                    <FormControlLabel
                        control={<Checkbox name="termsAgreed" checked={formState.termsAgreed} onChange={handleInputChange} />}
                        label="I agree to the Terms of Service and Privacy Policy"
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'pink' }}>
                        Create Account
                    </Button>
                    <Typography variant="body2" style={{ textAlign: 'center', color: 'pink' }}>
                        Already have an account? Sign in instead
                    </Typography>
                </form>
            </div>
        </div>
    );
}

export default SignUp;

