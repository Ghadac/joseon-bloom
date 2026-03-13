import { useEffect, useState } from 'react';
import { posthog } from '@/lib/posthog';

/**
 * Hook to get a PostHog feature flag value.
 * Returns the variant string (e.g. 'control', 'test') or undefined while loading.
 */
export const useFeatureFlag = (flagKey: string): string | undefined => {
  const [variant, setVariant] = useState<string | undefined>(undefined);

  useEffect(() => {
    // PostHog may need time to load flags
    const checkFlag = () => {
      const value = posthog.getFeatureFlag(flagKey);
      if (value !== undefined) {
        setVariant(String(value));
      }
    };

    // Check immediately
    checkFlag();

    // Also listen for flag loads
    posthog.onFeatureFlags(() => {
      checkFlag();
    });
  }, [flagKey]);

  return variant;
};

/**
 * Track an A/B test event with PostHog
 */
export const trackABEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  posthog.capture(eventName, {
    ...properties,
    $current_url: window.location.href,
  });
};
