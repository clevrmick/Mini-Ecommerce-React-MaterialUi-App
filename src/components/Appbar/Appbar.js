import { useMediaQuery, useTheme } from '@mui/material';
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';

const Appbar = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  console.log(match);

  return <div>{match ? <AppbarMobile /> : <AppbarDesktop />}</div>;
};

export default Appbar;
