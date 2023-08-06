import Socials from '@/components/Socials';
import { Box, Divider, Typography, styled } from '@mui/material';
import React from 'react';

const SocialsSectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));

const Separator = styled(Divider)(({ theme }) => ({
  margin: `0 ${theme.Spaces.sm}`,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
}));

const socialsLinks = {
  facebook: 'https://www.facebook.com/indianmediasyndicate',
  twitter: 'https://twitter.com/indianmediasyn',
  linkedin: 'https://www.linkedin.com/company/indianmediasyndicate/',
  youtube: 'https://www.youtube.com/channel/UC6XQGgj5zZj3qjJWgQ4b6Xg',
  instagram: 'https://www.instagram.com/indianmediasyndicate/',
}

const SocialsSection = () => {
  return (
    <SocialsSectionWrapper>
      <Title>Follow us</Title>
      <Separator orientation="vertical" flexItem />
      <Socials links={socialsLinks} />
    </SocialsSectionWrapper>
  )
};

export default SocialsSection