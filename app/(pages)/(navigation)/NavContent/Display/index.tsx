import { Box, styled } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const DisplayWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '1 / 6',
  gridRow: '1 / 18',
  borderRadius: '1rem',
  backgroundColor: theme.palette.primary.main,
  width: '100%', // Set the container width to 100%
  height: '100%', // Set the container height to 100%
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
}));

const ListOfVideos: string[] = [
  'https://www.indianmediasyndicate.com/images/megamenu-default-media.webm',
  'https://www.indianmediasyndicate.com/images/sitemap/media-network/megamenu-media.webm',
  'https://www.indianmediasyndicate.com/images/sitemap/education-and-teaching/megamenu-media.webm',
];

const Display: React.FC = () => {
  /* const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let currentVideoIndex = 0;
  let videoElement: HTMLVideoElement | null = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const updateCanvas = () => {
      if (!videoElement) {
        // Create video element if it doesn't exist
        videoElement = document.createElement('video');
        videoElement.src = ListOfVideos[currentVideoIndex];
        videoElement.loop = true;
        videoElement.autoplay = true;
        videoElement.addEventListener('play', () => {
          drawVideoOnCanvas(videoElement!, canvas!, ctx!);
        });
      } else {
        // Switch to the next video
        currentVideoIndex = (currentVideoIndex + 1) % ListOfVideos.length;
        videoElement.src = ListOfVideos[currentVideoIndex];
      }
    };

    const drawVideoOnCanvas = (
      video: HTMLVideoElement,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const aspectRatio = video.videoWidth / video.videoHeight;
      const parentWidth = canvas.parentElement?.clientWidth || 0;
      const parentHeight = canvas.parentElement?.clientHeight || 0;

      let canvasWidth = parentWidth;
      let canvasHeight = parentWidth / aspectRatio;

      if (canvasHeight > parentHeight) {
        canvasHeight = parentHeight;
        canvasWidth = parentHeight * aspectRatio;
      }

      const x = (parentWidth - canvasWidth) / 2;
      const y = (parentHeight - canvasHeight) / 2;

      ctx.drawImage(video, x, y, canvasWidth, canvasHeight);

      requestAnimationFrame(() => drawVideoOnCanvas(video, canvas, ctx));
    };

    // Start updating canvas
    const intervalId = setInterval(updateCanvas, 3000);

    // Clean up the interval and video element when the component is unmounted
    return () => {
      clearInterval(intervalId);
      if (videoElement) {
        videoElement.pause();
        videoElement.removeEventListener('play', () => {});
      }
    };
  }, []);

  // Dynamically adjust the canvas size to match the parent's size
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;
      if (canvas && parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    handleResize(); // Initial sizing

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); */

  return (
    <DisplayWrapper>
      {/* <canvas ref={canvasRef} id='display'>
        Your browser does not support the canvas element.
      </canvas> */}
    </DisplayWrapper>
  );
};

export default Display;
