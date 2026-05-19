import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrochureButtonProps {
  brochureUrl?: string;
  projectName: string;
  variant?: "default" | "outline";
  className?: string;
}

export function BrochureButton({ brochureUrl, projectName, variant = "outline", className = "" }: BrochureButtonProps) {
  const handleDownload = () => {
    if (brochureUrl) {
      // In production, this would download the actual PDF
      // For now, we'll show a toast or simulate the download
      const link = document.createElement('a');
      link.href = brochureUrl;
      link.download = `${projectName.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={handleDownload}
        variant={variant}
        size="lg"
        className={`
          group relative overflow-hidden
          ${variant === "outline" 
            ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
          }
          px-6 py-5 text-sm tracking-wider uppercase transition-all duration-300
          ${className}
        `}
      >
        <motion.span
          className="absolute inset-0 bg-primary/10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <span className="relative flex items-center gap-2">
          <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          Download Brochure
        </span>
      </Button>
    </motion.div>
  );
}
