import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import accesorio_photo from '../assets/accesorio_bicicleta.jpg';
import bicicleta_photo from '../assets/imagen_bicicleta.jpg';
import reparacion_photo from '../assets/reparacion_bicicleta.jpg';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const carouselHeight = '475px';

  const cards = [
    {
      title: 'Equipamiento y Accesorios Esenciales para Ciclistas',
      text: '',
      color: 'Black',
      color_oposite: 'White',
      image: accesorio_photo,
    },
    {
      title: 'Descubre las Mejores Bicicletas del Año',
      text: '',
      color: 'White',
      color_oposite: 'Black',
      image: bicicleta_photo,
    },
    {
      title: 'Mantencion y reparacion de bicicletas',
      text: '',
      color: 'Black',
      color_oposite: 'White',
      image: reparacion_photo,
    },
  ];

  return (
    <>
    <Box position={'relative'} height={carouselHeight} width="100%" overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={carouselHeight} // Ajusta la altura de la diapositiva
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height={carouselHeight} position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="White"
                  style={{
                    textShadow: '2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black',
                  }}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    <Box height="4" />
    </>
  );
}