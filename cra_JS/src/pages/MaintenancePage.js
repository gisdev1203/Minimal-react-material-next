import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography, Stack } from '@mui/material';
// assets
import { MaintenanceIllustration } from '../assets/illustrations';

// ----------------------------------------------------------------------

export default function MaintenancePage() {
  return (
    <>
      <Helmet>
        <title> Maintenance | Minimal UI</title>
      </Helmet>

      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h3" paragraph>
          Website currently under maintenance
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>

        <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

        <Button component={RouterLink} to="/" size="large" variant="contained">
          Go to Home
        </Button>
      </Stack>
    </>
  );
}
