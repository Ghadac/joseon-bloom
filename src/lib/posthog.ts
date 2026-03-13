import posthog from 'posthog-js';

const POSTHOG_KEY = 'YOUR_POSTHOG_API_KEY'; // Replace with your phc_... key
const POSTHOG_HOST = 'https://us.posthog.com';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
    });
  }
};

export { posthog };
