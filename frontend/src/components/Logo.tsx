import Link from "next/link";

/**
 * Returns hendo chan logo SVG HTML */
export default function Logo() {
  return (
    <>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
          width="40"
          height="50"
          aria-labelledby="title3"
        >
          <title id="title3">Sheffield Anime Group Hendo-chan Logo</title>
          <path
            d="M30 120 L 30 40 Q 30 20, 50 20 Q 70 20, 70 40 L 70 120 Z"
            fill="#4A4A4A"
            stroke="#222"
            strokeWidth="4"
          />
          <rect
            x="45"
            y="0"
            width="10"
            height="25"
            fill="#EEDC82"
            stroke="#222"
            strokeWidth="4"
          />
          <rect x="20" y="50" width="60" height="40" fill="#F58322" rx="5" />
          <g fill="#000000">
            <path
              d="M40 75 Q 42 68, 45 75"
              stroke="#000"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 75 Q 58 68, 55 75"
              stroke="#000"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M45 82 Q 50 88, 55 82"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </Link>
    </>
  );
}
