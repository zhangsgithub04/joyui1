import React, { useState } from 'react';
import { Box, Typography, Input, Paper } from '@mui/material';

const ColorPicker = () => {
    const [color, setColor] = useState('#ff0000');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Choose a color
            </Typography>
            <Input
                type="color"
                value={color}
                onChange={handleColorChange}
                sx={{ width: 150, height: 150, border: 'none', cursor: 'pointer', margin: '16px auto' }}
            />
            <Paper elevation={3} sx={{ width: '50%', height: 150, backgroundColor: color, margin: '16px auto' }}>
                <Typography variant="h6" sx={{ color: '#fff', p: 2 }}>
                    {color}
                </Typography>
            </Paper>
        </Box>
    );
};

export default ColorPicker;
