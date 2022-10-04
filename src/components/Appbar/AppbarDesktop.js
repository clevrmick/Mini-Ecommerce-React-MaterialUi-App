import { ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
const AppBarDesktop = ({ match }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>My bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Category" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact us" />
      </MyList>
    </AppbarContainer>
  );
};

export default AppBarDesktop;
