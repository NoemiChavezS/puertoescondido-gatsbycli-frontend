import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PropertyCard from "./PropertyCard";
import Box from "@mui/material/Box";
import "./../styles/slick.css";
import Container from "@mui/material/Container"

type SliderComponentType = {
  title: string;
  subtitle: string;
  settings?: any;
  data?: any;
}

const boxStyles = {
  margin: {
    xs: 1,
  },
  p: {
    xs: '0 1rem 0 0'
  },
  width: '100%',
}

const PropertySlider = ({ title, subtitle, data }:SliderComponentType) => {
  const sliderRef = React.useRef();

  const settings = {
    dots: true,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '15%',
          slidesToShow: 1,
          infinite: false,
        }
      }
    ]
  };

  return(
    <>
      <Container maxWidth="xl" sx={ {pl: 2} }>
        <Typography variant="subtitle1">{title}</Typography>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">{subtitle}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => {
              // @ts-ignore
              sliderRef.current.slickPrev();
            }
            } component={ChevronLeft}/>
            <IconButton onClick={() => {
              // @ts-ignore
              sliderRef?.current?.slickNext()
            }} component={ChevronRight}/>
          </Grid>
        </Grid>
        <Slider ref={sliderRef} {...settings}>
          { ( data && data.length > 0 ) && data.map( (item, index ) => (
            <Box key={index} sx={boxStyles}>
              <PropertyCard data={ item }/>
            </Box>
          )) }
        </Slider>
      </Container>

    </>
  )
}

export default React.forwardRef(PropertySlider);