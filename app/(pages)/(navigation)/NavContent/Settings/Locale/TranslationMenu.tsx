import { DialogueActions, DialogueButton, DialogueCard, DialogueContent, DialogueTitle } from '@/components/Dialogue';
import { styled } from '@mui/material';
import React from 'react';

const TranslationMenuTitle = styled(DialogueTitle)(({ theme }) => ({
  fontSize: '1.5em',
  fontWeight: 600,
  textAlign: 'start',
  padding: '1em',
}));

const TranslationMenuContent = styled(DialogueContent)(({ theme }) => ({
  maxWidth: '40em',
  display: 'grid',
  justifyItems: 'start',
  gridTemplateColumns: 'repeat(4, 1fr)',
}));

const TranslationMenuButton = styled(DialogueButton)(({ theme }) => ({
  width: '100%',
  textTransform: 'none',
}));

const TranslationMenuActions = styled(DialogueActions)(({ theme }) => ({
  justifyContent: 'end',
  padding: '1em',
}));

const CloseButton = styled(DialogueButton)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '0.75em',
}));

const TranslationMenu = (
  {
    open,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
  }
) => {
  return (
    <DialogueCard
      disableScrollLock
      aria-labelledby='translation-menu'
      aria-describedby='translation-menu-description'
      open={open}
      onClose={onClose}
    >
      <TranslationMenuTitle>Choose display language</TranslationMenuTitle>
      <TranslationMenuContent>
        <TranslationMenuButton variant='text' color='inherit'>Sanskrit</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Hindi</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Bengali</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Odia</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Telugu</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Tamil</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Malayalam</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Kannada</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>English</TranslationMenuButton>
        <TranslationMenuButton variant='text' color='inherit'>Italian</TranslationMenuButton>
      </TranslationMenuContent>
      <TranslationMenuActions>
        <CloseButton
          variant='contained'
          color='error'
          onClick={onClose}
        >
          Close
        </CloseButton>
      </TranslationMenuActions>
    </DialogueCard>
  )
}

export default TranslationMenu