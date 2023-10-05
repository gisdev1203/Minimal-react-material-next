import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Card,
  Stack,
  Radio,
  Tooltip,
  Container,
  CardHeader,
  Typography,
  RadioGroup,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// locales
import { useLocales } from '../../../locales';
// components
import Image from '../../../components/image';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function DemoMultiLanguagePage() {
  const { allLangs, currentLang, translate, onChangeLang } = useLocales();

  const [page, setPage] = useState(2);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title> Extra Components: Multi Language | Minimal UI</title>
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
            heading="Multi Language"
            links={[
              {
                name: 'Components',
                href: PATH_PAGE.components,
              },
              { name: 'Multi Language' },
            ]}
            moreLink={[
              'https://react.i18next.com',
              'https://mui.com/guides/localization/#main-content',
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Flexible" />

            <Box sx={{ p: 3 }}>
              <RadioGroup
                row
                value={currentLang.value}
                onChange={(event) => onChangeLang(event.target.value)}
              >
                {allLangs.map((lang) => (
                  <FormControlLabel
                    key={lang.label}
                    value={lang.value}
                    label={lang.label}
                    control={<Radio />}
                  />
                ))}
              </RadioGroup>

              <Tooltip title={currentLang.label}>
                <Stack direction="row" alignItems="center" sx={{ typography: 'h2', my: 3 }}>
                  <Image
                    disabledEffect
                    alt={currentLang.label}
                    src={currentLang.icon}
                    sx={{ mr: 1 }}
                  />
                  {`${translate('demo.title')}`}
                </Stack>
              </Tooltip>

              <Typography>{`${translate('demo.introduction')}`}</Typography>
            </Box>
          </Card>

          <Card>
            <CardHeader title="System" sx={{ pb: 2 }} />

            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Stack>
      </Container>
    </>
  );
}
