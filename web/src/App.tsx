import { useState } from "react";
import { initApp } from "@freeappstore/sdk";
import { type NavItem, PageHeader, Shell } from "@freeappstore/sdk/ui";
import MixerWorkbench from "./components/MixerWorkbench";

export const fas = initApp({ appId: "soundscape-lofi" });

const NAV: NavItem[] = [
  { label: "Mixer", href: "/", title: "Soundscape Lo-Fi" },
  { label: "About", href: "/about", title: "About — Soundscape Lo-Fi" },
];

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  return (
    <Shell app={fas} appName="Soundscape Lo-Fi" nav={NAV} onNavigate={navigate}>
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6">
        {path === "/about" ? <About /> : <MixerWorkbench />}
      </div>
    </Shell>
  );
}

function About() {
  return (
    <>
      <PageHeader
        title="Soundscape Lo-Fi"
        description="Procedural Web Audio ambient mixer with 6 noise spectrums, brainwave entrainment protocols, and real-time FFT visualization."
      />
      <p style={{ color: "var(--muted)" }}>
        soundscape-lofi is a free app on{" "}
        <a href="https://freeappstore.online" target="_blank" rel="noopener noreferrer">
          FreeAppStore
        </a>
        .
      </p>
    </>
  );
}