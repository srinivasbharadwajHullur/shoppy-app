import React from 'react'
import Banner from './Banner'
import FeaturedCategories from './FeaturedCategories'
import FeaturedItems from './FeaturedItems'

const Body = () => {
  return (
    <div>
      {/* Banner Component */}
      <Banner />
      {/* Featured Categories Component  */}
      <FeaturedCategories />
      {/* Featured Items component */}
      <FeaturedItems />
    </div>
  )
}

export default Body