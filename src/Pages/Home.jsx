import React from 'react';
import CustomNavbar from '../Component/HomeComponent/CustomNavbar';
import CustomCarousel from '../Component/HomeComponent/CustomCarousel';
import BlogPostCard from '../Component/HomeComponent/BlogPostCard ';

export const Home = () => {
  return (
    <div>
        <CustomNavbar />
        <CustomCarousel />
        <BlogPostCard/>
    </div>
  );
};

export default Home;
