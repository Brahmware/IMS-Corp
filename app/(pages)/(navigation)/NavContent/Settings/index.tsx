import ThemeChangeButton from '@/components/Button/ThemeChange';
import { Box, Divider, styled } from '@mui/material';
import React from 'react';
import Locale from './Locale';

const SettingsWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '20 / 25',
  gridRow: '19 / 24',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
}));

const SettingsContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: theme.Spaces.xl,
  alignSelf: 'center'
}));

const Settings = () => {

  return (
    <SettingsWrapper>
      <SettingsContent>
        <ThemeChangeButton />
        <StyledDivider
          flexItem
          orientation="vertical"
        />
        <Locale />
      </SettingsContent>
    </SettingsWrapper>
  )
}

export default Settings
