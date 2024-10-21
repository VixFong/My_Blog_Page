import React from 'react'
import CustomNavbar from '../Component/HomeComponent/CustomNavbar'
import BlogCategories from '../Component/BlogPageComponent/BlogCategories'

export const Blog = () => {
    const styles = {    
        wrapper: {
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#f9f9f9',
          paddingTop: '50px',
          width: '98.90vw',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
        container: {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto',
        },
    };      
  
  return (
    <div style={styles.wrapper}>
        <CustomNavbar />
        <div style={styles.container}> 
          <BlogCategories />
        </div>
    </div> 
  )
}
