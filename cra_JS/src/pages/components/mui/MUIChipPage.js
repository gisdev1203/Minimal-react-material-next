import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Card, Container, CardHeader, CardContent } from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import Chips from '../../../sections/_examples/mui/Chips';

// ----------------------------------------------------------------------

export default function MUIChipPage() {
  return (
    <>
      <Helmet>
        <title> MUI Components: Chip | Minimal UI</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Chip"
            links={[
              {
                name: 'Components',
                href: PATH_PAGE.components,
              },
              { name: 'Chip' },
            ]}
            moreLink={['https://mui.com/components/chips']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          <Card>
            <CardHeader title="Filled" />
            <CardContent>
              <Chips />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Outlined" />
            <CardContent>
              <Chips variant="outlined" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Soft" />
            <CardContent>
              <Chips variant="soft" />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
