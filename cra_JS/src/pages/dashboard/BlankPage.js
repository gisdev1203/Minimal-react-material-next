import { Helmet } from 'react-helmet-async';
// @mui
import { alpha } from '@mui/material/styles';
import { Container, Typography, Box } from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

export default function BlankPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Blank Page | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4"> Blank </Typography>

        <Box
          sx={{
            mt: 5,
            width: 1,
            height: 320,
            borderRadius: 2,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        />
      </Container>
    </>
  );
}
