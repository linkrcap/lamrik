"use client";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showWordmark = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { symbol: 24, text: "text-base" },
    md: { symbol: 32, text: "text-lg" },
    lg: { symbol: 40, text: "text-xl" },
  };

  const { symbol, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Symbol */}
      <svg
        width={symbol}
        height={symbol}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Main L shape */}
        <path
          d="M8 8V40H40V34H14V8H8Z"
          fill="currentColor"
        />
        {/* Ecosystem grid elements */}
        <rect x="22" y="8" width="8" height="8" fill="var(--accent-gold, #C89F59)" />
        <rect x="32" y="8" width="8" height="8" fill="currentColor" opacity="0.4" />
        <rect x="22" y="18" width="8" height="8" fill="currentColor" opacity="0.25" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span className={`font-semibold tracking-tight ${text}`}>
          Lamrik Labs
        </span>
      )}
    </div>
  );
}

// Icon-only version for favicons etc
export function LogoIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8V40H40V34H14V8H8Z"
        fill="currentColor"
      />
      <rect x="22" y="8" width="8" height="8" fill="var(--accent-gold, #C89F59)" />
      <rect x="32" y="8" width="8" height="8" fill="currentColor" opacity="0.4" />
      <rect x="22" y="18" width="8" height="8" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

