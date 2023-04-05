import React from 'react'
import AppAppBar from './views/AppAppBar';
import ProductHero from './views/ProductHero';
import ProductCategories from './views/ProductCategories';
import AppFooter from './views/AppFooter';
import withRoot from './components/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar/>
      <ProductHero/>
      <ProductCategories />
      <AppFooter/>
    </React.Fragment>
  );
}

export default withRoot(Index);