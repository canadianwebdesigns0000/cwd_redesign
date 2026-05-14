"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar to 90% quickly, finish to 100% on load
    const step = setInterval(() => {
      setProgress(p => {
        if (p >= 88) { clearInterval(step); return p; }
        return p + Math.random() * 14;
      });
    }, 120);

    const hide = () => {
      clearInterval(step);
      setProgress(100);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 800);
      }, 300);
    };

    if (document.readyState === "complete") {
      setTimeout(hide, 400);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 400), { once: true });
    }
    return () => clearInterval(step);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "linear-gradient(135deg, #010C1E 0%, #041830 60%, #010C1E 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? "none" : "all",
      overflow: "hidden",
    }}>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,170,223,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,223,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Radial vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #010C1E 100%)",
      }} />

      {/* Ambient glow behind logo */}
      <div style={{
        position: "absolute",
        width: 480, height: 480,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,170,223,0.18) 0%, transparent 70%)",
        animation: "pl-glow 3s ease-in-out infinite",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
      }} />

      {/* Corner accents */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 120, height: 1, background: "linear-gradient(90deg, #00AADF, transparent)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: 1, height: 120, background: "linear-gradient(180deg, #00AADF, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 1, background: "linear-gradient(270deg, #00AADF, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 1, height: 120, background: "linear-gradient(0deg, #00AADF, transparent)" }} />

      {/* Center content */}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        animation: "pl-rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
      }}>

        {/* Logo container */}
        <div style={{ position: "relative", width: 110, height: 110 }}>
          {/* Outer glow ring */}
          <div style={{
            position: "absolute", inset: -14,
            borderRadius: "50%",
            border: "1px solid rgba(0,170,223,0.2)",
            animation: "pl-ring-out 4s linear infinite",
          }} />
          {/* Mid ring */}
          <div style={{
            position: "absolute", inset: -6,
            borderRadius: "50%",
            border: "1.5px dashed rgba(0,170,223,0.15)",
            animation: "pl-ring-mid 8s linear infinite reverse",
          }} />
          {/* Logo disc */}
          <div style={{
            width: "100%", height: "100%",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #0A2040 0%, #010C1E 100%)",
            border: "1.5px solid rgba(0,170,223,0.35)",
            boxShadow: "0 0 40px rgba(0,170,223,0.4), 0 0 80px rgba(0,170,223,0.15), inset 0 1px 0 rgba(0,170,223,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pl-disc 3s ease-in-out infinite",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/favicon.png"
              alt="Canadian Web Designs"
              style={{ width: 62, height: 62, objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(0,170,223,0.6))" }}
            />
          </div>
        </div>

        {/* Brand name */}
        <div style={{ textAlign: "center", animation: "pl-fadein 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}>
          <div style={{
            fontSize: "1.45rem",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "0.06em",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
            marginBottom: "0.4rem",
          }}>
            Canadian <span style={{ color: "#00AADF" }}>Web Designs</span>
          </div>
          <div style={{
            fontSize: "0.72rem",
            color: "rgba(0,170,223,0.6)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}>
            Building Brands Online
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ animation: "pl-fadein 0.9s 0.35s cubic-bezier(0.22,1,0.36,1) both", width: 220 }}>
          <div style={{
            width: 220,
            height: 2,
            background: "rgba(0,170,223,0.12)",
            borderRadius: 2,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${Math.min(progress, 100)}%`,
              background: "linear-gradient(90deg, #0077AA, #00AADF, #44CCFF)",
              borderRadius: 2,
              transition: "width 0.18s ease-out",
              boxShadow: "0 0 8px rgba(0,170,223,0.8)",
            }} />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "0.45rem",
            fontSize: "0.65rem",
            color: "rgba(0,170,223,0.45)",
            letterSpacing: "0.1em",
            fontFamily: "monospace",
          }}>
            {Math.min(Math.round(progress), 100)}%
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pl-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-fadein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-glow {
          0%, 100% { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%,-50%) scale(1.15); }
        }
        @keyframes pl-disc {
          0%, 100% { box-shadow: 0 0 40px rgba(0,170,223,0.4), 0 0 80px rgba(0,170,223,0.15), inset 0 1px 0 rgba(0,170,223,0.2); }
          50%       { box-shadow: 0 0 55px rgba(0,170,223,0.65), 0 0 110px rgba(0,170,223,0.25), inset 0 1px 0 rgba(0,170,223,0.25); }
        }
        @keyframes pl-ring-out {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pl-ring-mid {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
