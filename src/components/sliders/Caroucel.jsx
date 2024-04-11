import { Carousel } from "flowbite-react";
import Data from "@data/sections/services.json";

const Caroucel = () => {
  // Split data items into chunks of 2 items each
  const chunkedItems = [];
  for (let i = 0; i < Data.items.length; i += 2) {
    chunkedItems.push(Data.items.slice(i, i + 2));
  }

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-8">
      <Carousel>
        {chunkedItems.map((chunk, chunkIndex) => {
          // Determine the number of items in the current chunk
          const isSingleCard = chunk.length === 1;

          // Set the appropriate classes for centering
          const slideClass = isSingleCard
            ? "flex justify-center"
            : "flex space-x-4";

          return (
            <div key={chunkIndex} className={slideClass}>
              {chunk.map((item, index) => (
                <div key={index} className="w-1/2 md:w-full relative">
                  {/* Card container with relative positioning */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-lg filter brightness-75"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    {/* Centered title */}
                    <h3 className="text-white text-lg font-bold text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Caroucel;
