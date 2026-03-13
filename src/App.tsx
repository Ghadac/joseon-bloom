import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Story from "./pages/Story";
import SkinAnalysis from "./pages/SkinAnalysis";
import ARStory from "./pages/ARStory";
import NotFound from "./pages/NotFound";
import VoiceAssistant from "./components/VoiceAssistant";
import PostHogPageTracker from "./components/PostHogPageTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PostHogPageTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/story" element={<Story />} />
          <Route path="/skin-analysis" element={<SkinAnalysis />} />
          <Route path="/ar-story" element={<ARStory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <VoiceAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
