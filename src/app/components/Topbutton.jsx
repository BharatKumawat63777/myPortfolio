"use client";

export default function TopButton() {
  return (
    <>
      <button
        data-test="btn-scroll-to-top"
        type="button"
        className="fixed bottom-5 right-10 bg-black text-white hover:bg-gray-700 transition-all duration-200 ease-linear p-2 rounded-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="sr-only">Scroll to top</span>

        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          viewBox="0 0 24 24"
          role="img"
        >
          <path
            vectorEffect="non-scaling-stroke"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M6 15l6-5 6 5"
          />
        </svg>
      </button>
    </>
  );
}
