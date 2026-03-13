import { usePostHogPageView } from '@/hooks/usePostHogPageView';

const PostHogPageTracker = () => {
  usePostHogPageView();
  return null;
};

export default PostHogPageTracker;
