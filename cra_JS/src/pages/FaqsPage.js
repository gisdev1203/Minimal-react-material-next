import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Typography } from '@mui/material';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

// ----------------------------------------------------------------------

export default function FaqsPage() {
  return (
    <>
      <Helmet>
        <title> Faqs | Minimal UI</title>
      </Helmet>

      <FaqsHero />

      <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
        <FaqsCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />

          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
