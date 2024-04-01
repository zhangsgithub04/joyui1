import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { pink } from '@mui/material/colors';

interface SignInState {
    email: string;
    password: string;
}

const SignIn = () => {
    const [formState, setFormState] = useState<SignInState>({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#F5F5F5' }}>
            <Paper elevation={3} style={{ padding: '40px', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
                <Typography variant="h4" component="h1" textAlign="center" gutterBottom color="primary">
                    Welcome to BoardX! 👋
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor: pink[500], color: 'white' }}>
                        Log in
                    </Button>
                    <Typography variant="body2" textAlign="center" style={{ color: pink[500], cursor: 'pointer' }}>
                        Forgot Password
                    </Typography>
                </form>
            </Paper>
        </div>
    );
}

export default SignIn;
