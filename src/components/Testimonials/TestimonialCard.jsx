import React from "react";

const TestimonialCard = ({ name, text, img }) => {
  return (
    <div className="my-6">
      <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
        <div className="mb-4 flex justify-center">
          <img
            src={img}
            alt={`Photo of ${name}`}
            className="rounded-full w-20 h-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="space-y-3 text-center">
            <p className="text-xs text-gray-500 dark:text-slate-300">{text}</p>
            <h2 className="text-xl font-bold text-black/80 dark:text-slate-300">
              {name}
            </h2>
          </div>
        </div>
        {/* Optional quote mark or icon could go here */}
      </div>
    </div>
  );
};

export default React.memo(TestimonialCard);
