import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (<>
    <div className='text-center bg-dark text-white p-2'>
        <a href='#'><FacebookIcon fontSize='large' color="white"/></a>
       <a href="#"> <InstagramIcon fontSize='large'/></a>
       <a href="#"> <GitHubIcon fontSize='large'/></a>
       <a href="#"> <EmailIcon fontSize='large'/></a>
       <span className='display-7'>||Developed & Maintained by Utkarsh Agrawal</span>
    </div>
    </>
  )
}

export default Footer