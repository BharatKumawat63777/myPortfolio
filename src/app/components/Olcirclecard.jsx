'use client';

import { FaBicycle, FaCar, FaHelicopter, FaPlane, FaRocket, FaBus } from 'react-icons/fa';

const steps = [
  { icon: <FaBicycle />, title: 'Step 1' },
  { icon: <FaCar />, title: 'Step 2' },
  { icon: <FaHelicopter />, title: 'Step 3' },
  { icon: <FaPlane />, title: 'Step 4' },
  { icon: <FaRocket />, title: 'Step 5' },
  { icon: <FaBus />, title: 'Step 6' },
];

const accentColors = [
  '#b8df4e', '#4cbccb', '#7197d3', '#ae78cb', '#7dc7a4', '#f078c2',
];

export default function OlCircleCards() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-10 text-gray-900">OL Circle Cards</h1>
      <ol className="max-w-5xl w-full flex flex-wrap justify-center gap-8 list-none">
        {steps.map((step, index) => (
          <li
            key={index}
            className="relative w-72 h-72 flex flex-col justify-center items-start p-8 text-gray-900"
            style={{ '--accent-color': accentColors[index % accentColors.length] }}
          >
            <div className="absolute inset-0 rounded-full border-[2rem] border-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-bold text-[var(--accent-color)] opacity-30">
              {index + 1}
            </div>
            <div className="w-16 h-16 text-4xl text-[var(--accent-color)] text-center">{step.icon}</div>
            <div className="text-2xl font-medium mt-4">{step.title}</div>
            <div className="text-sm font-light text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.
            </div>
          </li>          
        ))}
      </ol>
      <div className="mt-8 text-right">
        <a
          href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:underline"
        >
           Inspired by Freepik
        </a>
     <div className="bg-slate-700">testomnial</div>
      </div>
      <div className="" ></div>
    </div>
    </>
  );
}
