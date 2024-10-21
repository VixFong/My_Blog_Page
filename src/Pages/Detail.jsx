import React from 'react'
import CustomNavbar from '../Component/HomeComponent/CustomNavbar'
import BlogDetail from '../Component/DetailPageComponent/BlogDetail'
import CommentSection from '../Component/DetailPageComponent/CommentSection'

export const Detail = () => {
  return (
    <div>
        <CustomNavbar/>
        <BlogDetail/>
        <CommentSection/>
    </div>
  )
}
