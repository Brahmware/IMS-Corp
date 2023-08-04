import { Box, styled } from '@mui/material';
import React from 'react'
import NavContext from './NavContext';

const MegamenuWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '8 / 25',
  gridRow: '1 / 20',
  borderRadius: '1rem',
  height: 'max-content',
  gap: theme.Spaces.xxl,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyItems: 'end',
}));

const menuItems = [
  {
    title: 'Business',
    videoUrl:   '/media/videos/navMenu/business.webm',
    items: [
      {
        title: 'About Us',
        link: '/business/about-us',
      },
      {
        title: 'Our Leadership',
        link: '/business/our-leadership',
      },
      {
        title: 'Diversity & Inclusion',
        link: '/business/diversity-and-inclusion',
      },
      {
        title: 'Career',
        link: '/business/career',
      },
    ],
  },
  {
    title: 'Media Network',
    videoUrl:   '/media/videos/navMenu/media-network.webm',
    items: [
      {
        title: 'Business and Brands',
        link: '/media-network/business-and-brands',
      },
      {
        title: 'Focus Areas',
        link: '/media-network/focus-areas',
      },
      {
        title: 'Technology',
        link: '/media-network/technology',
      },
      {
        title: 'Newsroom',
        link: '/media-network/newsroom',
      },
    ],
  },
  {
    title: 'Education & Teaching',
    videoUrl:   '/media/videos/navMenu/education-and-teaching.webm',
    items: [
      {
        title: 'Resources',
        link: '/education-and-teaching/resources',
      },
      {
        title: 'Professional Learning',
        link: '/education-and-teaching/professional-learning',
      },
      {
        title: 'Immersive Experience',
        link: '/education-and-teaching/immersive-experience',
      },
    ],
  },
  {
    title: 'Collaborators',
    videoUrl:   '/media/videos/navMenu/collaborators.webm',
    items: [
      {
        title: 'Explorers',
        link: '/collaborators/explorers',
      },
      {
        title: 'Producers',
        link: '/collaborators/producers',
      },
    ],
  },
  {
    title: 'Partners',
    videoUrl:   '/media/videos/navMenu/partners.webm',
    items: [
      {
        title: 'Corporate & Foundations',
        link: '/partners/corporate-and-foundations',
      },
      {
        title: 'Become a Member',
        link: '/partners/become-a-member',
      },
    ],
  },
  {
    title: 'Commercial',
    videoUrl:   '/media/videos/navMenu/commercial.webm',
    items: [
      {
        title: 'Advertise with Us',
        link: '/commercial/advertise-with-us',
      },
      {
        title: 'Investors',
        link: '/commercial/investors',
      },
      {
        title: 'Sustainability Statement',
        link: '/commercial/sustainability-statement',
      },
    ],
  },
];


const Megamenu = () => {
  return (
    <MegamenuWrapper>
      {
        menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <NavContext
                title={item.title}
                videoUrl={item.videoUrl}
                menuItems={item.items}
              />
            </React.Fragment>
          )
        })
      }
    </MegamenuWrapper>
  )
}

export default Megamenu