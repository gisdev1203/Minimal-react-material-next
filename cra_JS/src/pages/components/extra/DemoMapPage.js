import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Container, CardHeader, CardContent } from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// config
import { MAP_API } from '../../../config-global';
// _mock_
import { cities as CITIES } from '../../../_mock/map/cities';
import { countries as COUNTRIES } from '../../../_mock/map/countries';
// components
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import MapHeatmap from '../../../sections/_examples/extra/map/heatmap';
import MapClusters from '../../../sections/_examples/extra/map/clusters';
import MapInteraction from '../../../sections/_examples/extra/map/interaction';
import MapChangeTheme from '../../../sections/_examples/extra/map/change-theme';
import MapMarkersPopups from '../../../sections/_examples/extra/map/MapMarkersPopups';
import MapDraggableMarkers from '../../../sections/_examples/extra/map/draggable-markers';
import MapGeoJSONAnimation from '../../../sections/_examples/extra/map/MapGeoJSONAnimation';
import MapViewportAnimation from '../../../sections/_examples/extra/map/viewport-animation';
import MapHighlightByFilter from '../../../sections/_examples/extra/map/MapHighlightByFilter';
import MapSideBySide from '../../../sections/_examples/extra/map/side-by-side';

// ----------------------------------------------------------------------

const THEMES = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
  light: 'mapbox://styles/mapbox/light-v10',
  dark: 'mapbox://styles/mapbox/dark-v10',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};

const baseSettings = {
  mapboxAccessToken: MAP_API,
  minZoom: 1,
};

const StyledMapContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function DemoMapPage() {
  return (
    <>
      <Helmet>
        <title> Extra Components: Map | Minimal UI</title>
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
            heading="Map"
            links={[
              {
                name: 'Components',
                href: PATH_PAGE.components,
              },
              { name: 'Map' },
            ]}
            moreLink={[
              'http://visgl.github.io/react-map-gl',
              'http://visgl.github.io/react-map-gl/examples',
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Change Theme" />
            <CardContent>
              <StyledMapContainer>
                <MapChangeTheme {...baseSettings} themes={THEMES} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Markers & Popups" />
            <CardContent>
              <StyledMapContainer>
                <MapMarkersPopups {...baseSettings} data={COUNTRIES} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Draggable Markers" />
            <CardContent>
              <StyledMapContainer>
                <MapDraggableMarkers {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Geojson Animation" />
            <CardContent>
              <StyledMapContainer>
                <MapGeoJSONAnimation {...baseSettings} mapStyle={THEMES.satelliteStreets} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Clusters" />
            <CardContent>
              <StyledMapContainer>
                <MapClusters {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Interaction" />
            <CardContent>
              <StyledMapContainer>
                <MapInteraction {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Viewport Animation" />
            <CardContent>
              <StyledMapContainer>
                <MapViewportAnimation
                  {...baseSettings}
                  data={CITIES.filter((city) => city.state === 'Texas')}
                  mapStyle={THEMES.light}
                />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Highlight By Filter" />
            <CardContent>
              <StyledMapContainer>
                <MapHighlightByFilter {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Heatmap" />
            <CardContent>
              <StyledMapContainer>
                <MapHeatmap {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Side By Side" />
            <CardContent>
              <StyledMapContainer>
                <MapSideBySide {...baseSettings} />
              </StyledMapContainer>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
