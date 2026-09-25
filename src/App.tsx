import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PalgharProjectDetail from "./pages/PalgharProjectDetail";
import Enquire from "./pages/Enquire";
import NotFound from "./pages/NotFound";
import { projects } from "./data/projects";

const queryClient = new QueryClient();

/** Reads :id from the URL, checks region, and renders the correct detail page */
const ProjectDetailRouter = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  if (project?.region === "Palghar") return <PalgharProjectDetail />;
  return <ProjectDetail />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailRouter />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

