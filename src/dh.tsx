import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Container, Grid, Card, CardContent, CardMedia, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

// Define the interface for repository data (if applicable for future dynamic data)
interface Repository {
  id: number;
  name: string;
  description: string;
  image: string;
}

const DockerHubUI: React.FC = () => {
  // Mock data example, you can replace this with API data fetching
  const repositories: Repository[] = [
    { id: 1, name: 'Repository 1', description: 'This is a description of repository 1', image: 'https://via.placeholder.com/150?text=Image+1' },
    { id: 2, name: 'Repository 2', description: 'This is a description of repository 2', image: 'https://via.placeholder.com/150?text=Image+2' },
    { id: 3, name: 'Repository 3', description: 'This is a description of repository 3', image: 'https://via.placeholder.com/150?text=Image+3' },
    // Add more mock data or fetch it from an API
  ];

  return (
    <div>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Docker Hub
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div style={{ position: 'relative', marginRight: '20px' }}>
            <InputBase
              placeholder="Search…"
              startAdornment={<SearchIcon />}
              style={{
                color: 'inherit',
                padding: '6px 12px',
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            />
          </div>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {repositories.map((repo) => (
            <Grid item xs={12} sm={6} md={4} key={repo.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={repo.image}
                  alt={repo.name}
                />
                <CardContent>
                  <Typography variant="h6">{repo.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {repo.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Pagination count={10} style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} />
      </Container>
    </div>
  );
};

export default DockerHubUI;
