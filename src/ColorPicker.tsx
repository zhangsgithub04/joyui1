import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { pink } from '@mui/material/colors';

const ColorPicker = () => {
    const [color, setColor] = useState<string>('#ff0000'); // State with a string type for the color value

    // Event handler with the TypeScript event type declared
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setColor(event.target.value); // Update state with the selected color value
    };

    return (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Choose a color
            </Typography>
            <TextField
                type="color"
                value={color}
                onChange={handleColorChange} // Attach the event handler here
                variant="outlined"
                sx={{ width: 150, height: 150, border: 'none', cursor: 'pointer', margin: '16px auto' }}
            />
            <Paper elevation={3} sx={{ width: '50%', height: 150, backgroundColor: color, margin: '16px auto' }}>
                <Typography variant="h6" sx={{ color: '#fff', p: 2 }}>
                    {color}
                </Typography>
            </Paper>
            <Button
                variant="contained"
                sx={{ backgroundColor: pink[500], color: 'white', marginTop: '16px' }}
                onClick={() => alert(`You selected ${color}`)} // Placeholder action
            >
                Confirm Color
            </Button>
        </Box>
    );
};

export default ColorPicker;
