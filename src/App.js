import { useEffect } from 'react';
import { Button, Container, ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/Appbar/Appbar';

function App() {
  useEffect(() => {
    document.title = 'React Material Ui Home';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Appbar />
        <Button variant="contained">testing component</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
