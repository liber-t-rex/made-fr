import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-8 text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 text-xl uppercase tracking-[0.2em] font-bold mb-16">Partenaires stratégiques</p>
        <div className="flex flex-wrap gap-20 justify-center items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="p-4">
            <img
              src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/8de5703a-3ffc-42ed-ad23-6b3a3b9ec12a"
              alt="CCI Paris"
              className="h-64 w-auto object-contain"
            />
          </div>
          <div className="p-4">
            <img
              src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/35d3f1de-4515-41ec-8ac8-8a5797c29efd"
              alt="World Impact Summit"
              className="h-64 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;