"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TFont = "default" | "dyslexic";

type TPrefContext = {
  font: TFont;
  changeFont: (f: TFont) => void;
  largeText: boolean;
  changeLargeText: (large: boolean) => void;
  largeTracking: boolean;
  changeLargeTracking: (large: boolean) => void;
  highlightLinks: boolean;
  changeHighlightLinks: (h: boolean) => void;
};

const PrefContext = createContext<TPrefContext | undefined>(undefined);

type PrefProviderProps = {
  children: ReactNode;
};

export const PrefProvider: React.FC<PrefProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [font, setFont] = useState<TFont>("default");
  const [largeText, setLargeText] = useState<boolean>(false);
  const [largeTracking, setLargeTracking] = useState<boolean>(false);
  const [highlightLinks, setHighlightLinks] = useState<boolean>(false);

  const changeFont = (f: TFont) => {
    const r: HTMLElement | null = document.querySelector(":root");

    if (f === "default") {
      setFont("default");
      localStorage.setItem("font", "default");

      if (r) {
        r.style.setProperty("--font-current", "var(--font-default)");
        r.style.setProperty(
          "--font-current-serif",
          "var(--font-default-serif)"
        );
      }
    } else {
      setFont("dyslexic");
      localStorage.setItem("font", "dyslexic");

      if (r) {
        r.style.setProperty("--font-current", "var(--font-dyslexic)");
        r.style.setProperty("--font-current-serif", "var(--font-dyslexic)");
      }
    }
  };

  const changeLargeText = (large: boolean) => {
    const r: HTMLElement | null = document.querySelector(":root");

    if (large === false) {
      setLargeText(false);
      localStorage.setItem("largeText", "false");

      if (r) {
        r.style.fontSize = "var(--font-size-default)";
      }
    } else {
      setLargeText(true);
      localStorage.setItem("largeText", "true");

      if (r) {
        r.style.fontSize = "var(--font-size-large)";
      }
    }
  };

  const changeLargeTracking = (large: boolean) => {
    const r: HTMLElement | null = document.querySelector(":root");

    if (large === false) {
      setLargeTracking(false);
      localStorage.setItem("largeTracking", "false");

      if (r) {
        r.style.letterSpacing = "var(--letter-spacing-default)";
      }
    } else {
      setLargeTracking(true);
      localStorage.setItem("largeTracking", "true");

      if (r) {
        r.style.letterSpacing = "var(--letter-spacing-large)";
      }
    }
  };

  const changeHighlightLinks = (h: boolean) => {
    setHighlightLinks(h);
    if (h) {
      localStorage.setItem("highlightLinks", "true");
    } else {
      localStorage.setItem("highlightLinks", "false");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const f = localStorage.getItem("font");
    const l = localStorage.getItem("largeText");
    const lt = localStorage.getItem("largeTracking");
    const h = localStorage.getItem("highlightLinks");

    if (f && (f as TFont)) {
      changeFont(f as TFont);
    }

    if (l) {
      if (l === "true") {
        changeLargeText(true);
      } else {
        changeLargeText(false);
      }
    }

    if (lt) {
      if (lt === "true") {
        changeLargeTracking(true);
      } else {
        changeLargeTracking(false);
      }
    }

    if (h) {
      if (h === "true") {
        changeHighlightLinks(true);
      } else {
        changeHighlightLinks(false);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <PrefContext.Provider
      value={{
        font,
        changeFont,
        largeText,
        changeLargeText,
        largeTracking,
        changeLargeTracking,
        highlightLinks,
        changeHighlightLinks,
      }}
    >
      {children}
      {isLoading && (
        <div className="w-screen h-screen fixed z-50 inset-0 bg-black/50">
          loading...
        </div>
      )}
    </PrefContext.Provider>
  );
};

export const usePrefs = () => {
  const context = useContext(PrefContext);

  if (!context) {
    throw new Error("usePrefs must be used with a PrefProvider");
  }

  return context;
};
