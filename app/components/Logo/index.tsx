'use client';

import { styled } from '@mui/material';
import { default as IMSLogoFullSVG } from './ims_logo_full.svg';
export { default as IMSLogo } from './ims_logo.svg';

const IMSLogoStyled = styled(IMSLogoFullSVG)(({ theme }) => ({
  '& .ims_logo_full_svg__word__mark': {
    transition: 'all 0.1s ease-in-out',
    fill: theme.palette.secondary.main,
  },
}));

export const IMSLogoFull = (
  { ...props }: React.SVGProps<SVGSVGElement>
) => {
  return <IMSLogoStyled {...props} />;
};

