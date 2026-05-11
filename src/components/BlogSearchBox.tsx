"use client";

import { useState, useTransition, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function BlogSearchBox({ initialQ }: { initialQ: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialQ);
  const [, startTransition] = useTransition();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setValue(q);
    startTransition(() => {
      if (q.trim()) {
        router.push(`/blog?q=${encodeURIComponent(q.trim())}`);
      } else {
        router.push("/blog");
      }
    });
  }, [router]);

  const clear = useCallback(() => {
    setValue("");
    router.push("/blog");
  }, [router]);

  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search articles by title, topic, or category..."
        className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 font-medium focus:outline-none focus:border-[#00AADF] focus:ring-2 focus:ring-[#00AADF]/20 transition-all duration-200"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      />
      {value && (
        <button
          onClick={clear}
          className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors min-w-[44px] justify-center"
          aria-label="Clear search"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
