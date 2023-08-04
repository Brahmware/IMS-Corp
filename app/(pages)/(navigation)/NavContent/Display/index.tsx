import { Box, Card, styled, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useNavContext } from '../Megamenu/NavContext/NavContextProvider';
import { IMSLogo } from '@/components/Logo';
import navbar from '@/utils/constants/navbar';

const DisplayWrapper = styled(Card)(({ theme }) => ({
  gridColumn: '1 / 6',
  gridRow: '1 / 20',
  borderRadius: '1rem',
  width: '100%',
  aspectRatio: '1 / 1.75',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: 'unset',

  [theme.breakpoints.up('lg')]: {
    gridColumn: '1 / 6',
  }
}));

const DisplayVideo = styled('video')(({ theme }) => ({
  width: '101%',
  height: '101%',
  objectFit: 'cover',
  position: 'absolute',
  top: '-1%',
  left: '-1%',
}));

const Shutter = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'medium',
  }),
  transform: 'translateY(98%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const IMSLogoStyled = styled(IMSLogo)(({ theme }) => ({
  width: '50%',
  height: '50%',
}));

const Display: React.FC = () => {

  const { videoUrl } = useNavContext().currentItem;
  const videoRef = useRef<HTMLVideoElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const onVideoLoaded = () => {
    if (shutterRef.current) {
      shutterRef.current.style.transform = 'translateY(98%)';
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', onVideoLoaded);

      if (shutterRef.current) {
        shutterRef.current.style.transform = 'translateY(0%)';
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', onVideoLoaded);
      }
    };
  }, [videoUrl]);

  const [delayedVideoUrl, setDelayedVideoUrl] = React.useState(navbar.defaultMedia.videoUrl);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedVideoUrl(videoUrl), theme.Transitions.durations.medium);

    return () => {
      clearTimeout(timeout);
    };
  }, [videoUrl]);

  return (
    <DisplayWrapper elevation={navbar.elevationLow}>
      <DisplayVideo
        src={delayedVideoUrl}
        ref={videoRef}
        autoPlay
        muted
        loop
      />
      <Shutter elevation={navbar.elevationHigh} ref={shutterRef}>
        <IMSLogoStyled />
      </Shutter>
    </DisplayWrapper>
  );
};

export default Display;
