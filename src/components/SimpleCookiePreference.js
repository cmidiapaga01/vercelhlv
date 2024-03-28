import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Switch } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import TagManager from 'react-gtm-module';

export default function SimpleCookiePreference() {
  const [googleAnalyticsConsent, setGoogleAnalyticsConsent] = useState(false);
  const [cookiePreferencesClicked, setCookiePreferencesClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Verifica se já existe consentimento armazenado
    const consent = localStorage.getItem('googleAnalyticsConsent');
    if (consent === 'true') {
      setGoogleAnalyticsConsent(true);
    }
  }, []);

  useEffect(() => {
    // Verifica se houve mudança no consentimento e armazena no localStorage
    localStorage.setItem('googleAnalyticsConsent', googleAnalyticsConsent.toString());
  }, [googleAnalyticsConsent]);

  useEffect(() => {
    if (googleAnalyticsConsent) {
      TagManager.initialize({ gtmId: 'GTM-W3B98G7C' });
      setTimeout(() => {
        setFadeOut(true);
      }, 500);
    }
  }, [googleAnalyticsConsent]);

  const handleGoogleAnalyticsConsentChange = () => {
    setGoogleAnalyticsConsent(!googleAnalyticsConsent);
  };

  const handleOkButtonClick = () => {
    if (!cookiePreferencesClicked) {
      setGoogleAnalyticsConsent(true);
      setFadeOut(true);
    } else {
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
          We use cookies and similar technologies to help personalise content, tailor and
          measure ads, and provide a better experience.
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

      {cookiePreferencesClicked && (
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
