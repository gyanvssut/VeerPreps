"use client";

import { useEffect, useState } from "react";
import { X, Info } from "lucide-react";

export default function SiteBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem("veerpreps_banner_dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("veerpreps_banner_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800/50 px-4 py-3 mt-16 relative z-40">
      <div className="max-w-7xl mx-auto flex items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 sm:mt-0 flex-shrink-0" />
          <p className="text-sm text-blue-800 dark:text-blue-200 leading-snug">
            <span className="font-semibold">Notice:</span> We are now{" "}
            <span className="font-bold">VeerPreps</span> (formerly IIT Kirba).
            Due to a technical issue, some PYQs and PDFs were lost. We are
            working to restore them and ensure this doesn't happen again.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200 transition-colors p-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/30"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
