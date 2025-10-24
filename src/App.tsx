import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutUEM from "./pages/AboutUEM";
import CommitteeOrganizing from "./pages/CommitteeOrganizing";
import CommitteeTechnical from "./pages/CommitteeTechnical";
import CommitteeAdvisory from "./pages/CommitteeAdvisory";
import Submissions from "./pages/Submissions";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import TechnicalSchedule from "./pages/TechnicalSchedule";
import AcceptedPapers from "./pages/AcceptedPapers";
import BestPapers from "./pages/BestPapers";
import Registration from "./pages/Registration";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-uem" element={<AboutUEM />} />
          <Route path="/committee/organizing" element={<CommitteeOrganizing />} />
          <Route path="/committee/technical" element={<CommitteeTechnical />} />
          <Route path="/committee/advisory" element={<CommitteeAdvisory />} />
          <Route path="/authors/submissions" element={<Submissions />} />
          <Route path="/authors/call-for-papers" element={<CallForPapers />} />
          <Route path="/authors/important-dates" element={<ImportantDates />} />
          <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
          <Route path="/technical-programs/schedule" element={<TechnicalSchedule />} />
          <Route path="/technical-programs/accepted-papers" element={<AcceptedPapers />} />
          <Route path="/technical-programs/best-papers" element={<BestPapers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
