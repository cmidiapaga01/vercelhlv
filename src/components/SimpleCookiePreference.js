import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Switch } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import TagManager from 'react-gtm-module';

export default function SimpleCookiePreference() {
  const [googleAnalyticsConsent, setGoogleAnalyticsConsent] = useState(false);
  const [cookiePreferencesClicked, setCookiePreferencesClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (googleAnalyticsConsent) {
      TagManager.initialize({ gtmId: 'GTM-W3B98G7C' }); // Inicializa o Google Tag Manager com seu ID de container
      setTimeout(() => {
        setFadeOut(true);
      }, 500); // Define um timeout para aplicar o efeito de fade out após 500ms (0.5 segundos)
    }
  }, [googleAnalyticsConsent]);

  const handleGoogleAnalyticsConsentChange = () => {
    setGoogleAnalyticsConsent(!googleAnalyticsConsent);
  };

  const handleOkButtonClick = () => {
    if (!cookiePreferencesClicked) {
      // Se o usuário clicou em OK sem abrir o Cookie Preferences
      setGoogleAnalyticsConsent(true);
      setFadeOut(true); // Aplica o efeito de fade out
    } else {
      // Se o usuário ativou o switch e clicou em OK dentro do Cookie Preferences
      setGoogleAnalyticsConsent(true);
      setCookiePreferencesClicked(false);
    }
  };

  const handleCookiePreferencesClick = () => {
    setCookiePreferencesClicked(true);
  };

  return (
    <Stack
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      p="4"
      boxShadow="lg"
      borderRadius="sm"
      transition="opacity 0.5s"
      opacity={fadeOut ? 0 : 1}
      bg="white"
      zIndex="999"
    >
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          {!cookiePreferencesClicked && (
            <Button variant="outline" colorScheme="green" onClick={handleCookiePreferencesClick}>
              Cookie Preferences
            </Button>
          )}
          <Button colorScheme="green" onClick={handleOkButtonClick}>
            OK
          </Button>
        </Stack>
      </Stack>

      {cookiePreferencesClicked && ( // Exibe o switch do Google Analytics apenas se o usuário clicou em "Cookie Preferences"
        <Stack direction="row" alignItems="center">
          <Text fontSize="sm">Google Analytics</Text>
          <Switch
            colorScheme="green"
            size="lg"
            isChecked={googleAnalyticsConsent}
            onChange={handleGoogleAnalyticsConsentChange}
          />
        </Stack>
      )}
    </Stack>
  );
}
