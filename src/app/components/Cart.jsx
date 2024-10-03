import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Cart = ({ result }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
        <Link href={`/movie/${result.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={300}
            height={200}
            className="w-full h-auto rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            alt={result.title || result.name}
          />

          <div className="p-4">
            <p className="line-clamp-2 text-sm md:text-md text-gray-700">
              {result.overview}
            </p>
            <h2 className="text-lg md:text-xl font-bold truncate mt-2">
              {result.title || result.name}
            </h2>
          </div>
          
          <div className="flex justify-between items-center p-4 border-t border-gray-200">
            <div className="text-xs md:text-sm text-gray-600">
              Date: {result.release_date || result.first_air_date}
            </div>
            <div className="text-xs md:text-sm text-gray-600">
              Vote: {result.vote_count}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;