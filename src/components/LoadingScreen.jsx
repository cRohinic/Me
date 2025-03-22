import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<HI ALL... WELCOME TO MY PORTFOLIO... />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-[#8AAD3F] flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold text-[#8AAD3F]">
        {text} <span className="animate-blink ml-1 text-white"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-[#8AAD3F] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#8AAD3F] shadow-[0_0_15px_#8AAD3F] animate-loading-bar"></div>
      </div>
    </div>
  );
};