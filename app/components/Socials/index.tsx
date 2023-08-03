import Link from 'next/link';
import { Box, BoxProps, styled } from '@mui/material';
import { FacebookIcon } from '@icons/SocialMedia';
import { TwitterIcon } from '@icons/SocialMedia';
import { LinkedinIcon } from '@icons/SocialMedia';
import { YoutubeIcon } from '@icons/SocialMedia';
import { InstagramIcon } from '@icons/SocialMedia';
import { WhatsappIcon } from '@icons/SocialMedia';
import SocialLink from './SocialLink';

interface SocialsProps {
  links: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
    whatsapp?: string;
  },
  options?: {
    size?: string;
    gap?: string;
    genColor?: string;
    hoverColor?: string;
  }
};

interface SocialsWrapperProps extends BoxProps {
  gap?: string;
};

const SocialsWrapper = styled(Box)<SocialsWrapperProps>(({ theme, gap }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  
  '& > a': {
    margin: `0 ${gap || theme.Spaces.sm}`,

    '&:first-of-type': {
      marginLeft: 0,
    },

    '&:last-of-type': {
      marginRight: 0,
    },
  },

}));

const Socials = ({ links }: SocialsProps) => {
  return (
    <SocialsWrapper>
      {links.facebook && <SocialLink href={links.facebook}><FacebookIcon /></SocialLink>}
      {links.twitter && <SocialLink href={links.twitter}><TwitterIcon /></SocialLink>}
      {links.linkedin && <SocialLink href={links.linkedin}><LinkedinIcon /></SocialLink>}
      {links.youtube && <SocialLink href={links.youtube}><YoutubeIcon /></SocialLink>}
      {links.instagram && <SocialLink href={links.instagram}><InstagramIcon /></SocialLink>}
      {links.whatsapp && <SocialLink href={links.whatsapp}><WhatsappIcon /></SocialLink>}
    </SocialsWrapper>
  )
}

export default Socials