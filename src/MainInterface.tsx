import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, Paper, IconButton, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu';
import { pink } from '@mui/material/colors';

const drawerWidth = 240;

const MainInterface = () => {
  const navigationItems = ['Ava', 'Boards', 'Agent', 'Beta', 'Feedback'];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ bgcolor: pink[500] }}> {/* Changed AppBar color to pink */}
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            SOTeaching
          </Typography>
          <InputBase
            startAdornment={<SearchIcon fontSize="small" sx={{ mr: 1 }} />}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ mr: 2 }}
          />
          <IconButton color="inherit">
            <StarBorder />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navigationItems.map((text) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          All Boards
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: pink[500] }}> {/* Changed Paper color to pink */}
              <AddIcon fontSize="large" />
              <Typography>Create New</Typography>
            </Paper>
          </Grid>
          {/* ...other board items */}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainInterface;
