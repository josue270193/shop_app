import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './layout/ProductHeroLayout';

const backgroundImage =
  'https://www.aromasartesanales.de/wp-content/uploads/2022/12/Slider_03.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Unseren Shop gibt es jetzt auch online
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Shoppen Sie ganz bequem in unserem Online-Shop und wir versenden die Bestellung zu Ihnen nach Hause
      </Typography>

    </ProductHeroLayout>
  );
}