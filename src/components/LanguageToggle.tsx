"use client";

export default function LanguageToggle() {
  return (
    <div className="relative group">
      <button
        disabled
        className="text-sm font-medium text-dark/40 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-not-allowed select-none"
        aria-label="French version coming soon"
        title="Version française — bientôt disponible"
      >
        FR
      </button>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Bientôt / Coming soon
      </span>
    </div>
  );
}
