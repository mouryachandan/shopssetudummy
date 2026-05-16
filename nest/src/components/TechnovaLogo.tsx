export function TechnovaLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
    >
      {/* Outer circle */}
      <circle cx="20" cy="20" r="19" fill="currentColor" opacity="0.1" />

      {/* Gradient effect - using multiple shapes */}
      <g>
        {/* Top right segment - bright */}
        <path
          d="M 20 8 L 28 14 L 24 20 Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Right segment */}
        <path
          d="M 28 14 L 32 20 L 28 26 L 24 20 Z"
          fill="currentColor"
          opacity="0.7"
        />
        {/* Bottom right segment */}
        <path
          d="M 24 20 L 28 26 L 20 32 Z"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Bottom left segment */}
        <path
          d="M 20 32 L 12 26 L 16 20 Z"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Left segment */}
        <path
          d="M 12 26 L 8 20 L 12 14 L 16 20 Z"
          fill="currentColor"
          opacity="0.7"
        />
        {/* Top left segment - bright */}
        <path
          d="M 16 20 L 12 14 L 20 8 Z"
          fill="currentColor"
          opacity="0.9"
        />
      </g>

      {/* Center dot */}
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
