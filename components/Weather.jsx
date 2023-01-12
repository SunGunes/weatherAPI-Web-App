import React from "react";
import Image from "next/image";

function Weather({ data }) {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[85vh] m-auto p-4  text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`http:${data.current.condition.icon}`}
            alt="WeatherLogo"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.current.condition.text}</p>
        </div>
        <p className="text-9xl">{data.current.temp_c}&#176;</p>
      </div>
      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">
          Weather in {data.location.region}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.current.feelslike_c}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.current.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.current.wind_mph} {data.current.wind_dir}
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
