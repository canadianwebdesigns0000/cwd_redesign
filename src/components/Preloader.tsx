"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 700);
    };
    if (document.readyState === "complete") {
      setTimeout(hide, 500);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 500), { once: true });
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#010C1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Ambient orb */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500, height: 500,
        borderRadius: "50%",
        background: "#00AADF",
        filter: "blur(140px)",
        opacity: 0.18,
        animation: "preloader-orb 3s ease-in-out infinite",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      {/* Spinner */}
      <div style={{
        width: 56, height: 56,
        borderRadius: "50%",
        border: "3px solid rgba(0,170,223,0.2)",
        borderTopColor: "#00AADF",
        animation: "preloader-spin 0.9s linear infinite",
        flexShrink: 0,
      }} />

      {/* Logo */}
      <div style={{
        background: "#ffffff",
        borderRadius: 12,
        padding: "10px 20px",
        boxShadow: "0 0 40px rgba(0,170,223,0.5), 0 8px 32px rgba(0,0,0,0.4)",
        animation: "preloader-pulse 2s ease-in-out infinite",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo.png"
          alt="Canadian Web Designs"
          style={{ height: 38, width: "auto", display: "block" }}
        />
      </div>

      {/* Progress bar */}
      <div style={{
        width: 180,
        height: 2,
        background: "rgba(255,255,255,0.1)",
        borderRadius: 9999,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #003B6F, #00AADF)",
          borderRadius: 9999,
          animation: "preloader-bar 1.4s cubic-bezier(0.4,0,0.2,1) infinite",
        }} />
      </div>

      <style>{`
        @keyframes preloader-spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes preloader-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(0,170,223,0.4); }
          50%       { box-shadow: 0 0 70px rgba(0,170,223,0.7); }
        }
        @keyframes preloader-fade {
          from { opacity: 0.5; }
          to   { opacity: 1; }
        }
        @keyframes preloader-bar {
          0%   { width: 0%; margin-left: 0; }
          50%  { width: 70%; margin-left: 0; }
          100% { width: 0%; margin-left: 100%; }
        }
        @keyframes preloader-orb {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.18; }
          50%       { transform: translate(-50%, -50%) scale(1.3); opacity: 0.28; }
        }
      `}</style>
    </div>
  );
}
