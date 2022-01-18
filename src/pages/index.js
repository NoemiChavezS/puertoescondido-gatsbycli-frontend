import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import withTheme from "../components/theme"
import Banner from "../components/Banner"
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from "../theme/Theme";

import PropertySlider from "../components/PropertySlider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"
import PostCard from "../components/PostCard"
import TestimonialsSlider from "../components/TestimonialsSlider"
import {Zoom, Fade} from 'react-reveal';
// @ts-ignore
import IconGastronomy from './../images/icons/gastronomy.svg';
import IconBeach from "./../images/icons/Beach.svg";
import IconHiking from "./../images/icons/hiking.svg";
import IconTurtle from "../images/icons/turtle.svg";
import IconFolclore from "./../images/icons/Folklore.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img_puerto_escondido.JPG" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return(
    <>
      <ThemeProvider theme={defaultTheme}>
        <Seo title="Home" />
        <Layout scrollTrigger={true}>
          <Banner/>
          <Box sx={{
            background: 'linear-gradient(0deg, rgba(234,227,217,1) 0%, rgba(255,255,255,1) 100%)',
            height: 600,
            width: '100%',
            pt: 4
          }}>
            <Container sx={{
              padding: {
                xs: 0
              }
            }} maxWidth="xl">
              <PropertySlider/>
            </Container>
          </Box>
          <Box sx={{
            background: '#F2FBFC',
            height: {
              xs: 'auto',
              md: 420
            },
            width: '100%',
            padding: '2rem 0'
          }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid
                  order={{ xs:  2, md: 1}}
                  xs={ 12 }
                  md={ 6 }
                  item
                >
                  <Typography sx={{fontWeight: 600}} variant="h5">Puerto Escondido, Oaxaca.</Typography>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 2}} variant="h6">Invierte en este destino turístico.</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 3}} variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor velit adipiscing lorem tellus
                        blandit. In suspendisse a ut id aliquam. Enim vitae aliquet sit sit lectus ultrices urna. Donec orci,
                        ridiculus blandit fames tristique. At lobortis.
                      </Typography>
                    </Grid>
                  </Grid>
                    <Fade cascade bottom>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16
                      }}>
                        <Stack direction="column">
                          <IconBeach width={40}/>
                          <Typography variant="caption">Playas</Typography>
                        </Stack>
                        <Stack direction="column">
                          <IconGastronomy width={40}/>
                          <Typography variant="caption">Gastronomía</Typography>
                        </Stack>
                        <Stack direction="column">
                          <IconHiking width={40}/>
                          <Typography variant="caption">Senderismo</Typography>
                        </Stack>
                        <Stack direction="column">
                          <IconTurtle width={40}/>
                          <Typography variant="caption">Vida salvaje</Typography>
                        </Stack>
                        <Stack direction="column">
                          <IconFolclore width={40}/>
                          <Typography variant="caption">Folclore</Typography>
                        </Stack>
                      </div>
                    </Fade>
                  <Grid container>
                    <Button variant="contained" color="primary">
                      Contáctanos
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    mb: {
                      xs: 4,
                    }
                  }}
                  order={{ xs: 1, md: 2 }}
                  justifyContent="center"
                  display="flex"
                  xs={12}
                  md={6}
                  item
                >
                  <Zoom>
                    <StaticImage
                      src="../images/img_puerto_escondido.JPG"
                      formats={['auto']}
                      style={{
                        borderRadius: 16,
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        marginTop: 0,
                      }}
                      quality={100}
                      fixed={data.file.childImageSharp.fixed}
                      alt="Puerto escondido"
                    />
                  </Zoom>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container maxWidth="xl">
            <Typography variant="h6">Últimas entradas</Typography>
            <Typography sx={{fontWeight: 600}} variant="h5">De nuestro blog</Typography>
            <Grid container>
              <Grid item>
                <PostCard/>
              </Grid>
              <Grid item>
                <PostCard/>
              </Grid>
              <Grid item>
                <PostCard/>
              </Grid>
              <Grid item>
                <PostCard/>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{
            justifyContent: 'center',
            display: 'flex'
          }}>
            <Button
              color="primary"
              variant="contained"
            >
              Ver más entradas
            </Button>
          </Box>
          <Container maxWidth="xl">
            <TestimonialsSlider/>
          </Container>
          <Typography align="center">
            “NO ESPERE A INVERTIR EN BIENES RAICES,
            INVIERTA EN BIENES RAICES Y ESPERE”
          </Typography>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default withTheme(IndexPage)
