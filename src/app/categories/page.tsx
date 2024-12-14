"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [value, setValue] = useState(150);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="w-full flex Plus_Jakarta_Sans">
      <div className="first hidden sm:hidden lg:block justify-center w-[20%]">
        <div className="w-64 bg-white p-8 rounded-xl d">
          {/* Type Section */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-[#90A3BF] mb-4">TYPE</h2>
            <div className="space-y-4">
              {[
                { label: "Sport", count: 10 },
                { label: "SUV", count: 12 },
                { label: "MPV", count: 6 },
                { label: "Sedan", count: 20 },
                { label: "Coupe", count: 14 },
                { label: "Hatchback", count: 14 },
              ].map((type, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                      type="checkbox"
                      className="appearance-none w-5 h-4 rounded-sm border border-[#B2B2B2] checked:bg-[#3563E9] checked:before:content-['✔'] checked:before:text-white checked:before:text-xs flex items-center justify-center"
                    />
                  <label
                    htmlFor={type.label}
                    className="text-lg font-semibold flex justify-start gap-2 w-full peer-checked:bg-[#3563E9] peer-checked:text-white"
                  >
                    {type.label}{" "}
                    <span className="text-[#8599b6] font-semibold peer-checked:bg-[#3563E9] peer-checked:text-white">
                      ({type.count})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-[#90A3BF] mb-4">
              Capacity
            </h2>
            <div className="space-y-2">
              {[
                { label: "2 Person", count: 10 },
                { label: "4 Person", count: 14 },
                { label: "6 Person", count: 12 },
                { label: "8 or More", count: 16 },
              ].map((capacity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={capacity.label}
                    className="w-4 h-4 text-blue-600 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={capacity.label}
                    className="text-lg text-[#596780] font-semibold flex justify-start gap-2 w-full"
                  >
                    {capacity.label}{" "}
                    <span className="text-[#8599b6] font-semibold ">
                      ({capacity.count})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#90A3BF] mb-4">Price</h2>
            <div className="flex flex-col space-y-4">
              <div className="relative w-full flex items-center">
                <div className="w-full h-2 bg-[#90A3BF] rounded-full relative">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${(value / 300) * 100}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={value}
                  onChange={handleInputChange}
                  className="absolute w-full h-9 opacity-0"
                  style={{ top: "0", left: "0" }}
                />
                <div
                  className="absolute w-6 h-6 bg-blue-500 border-4 border-white rounded-full"
                  style={{
                    left: `${(value / 300) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">Max. $300.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image
            src={"/Pick - Up.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-[200px] md:w-[270px] lg:w-[650px]"
          />
          <Image
            src={"/Switch2.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-[120px]"
          />
          <Image
            src={"/Drop - Off.png"}
            alt=""
            width={1000}
            height={1000}
            className=" w-[200px] md:w-[270px] lg:w-[750px]"
          />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  Koenigsegg{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  Sport
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-1.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $99.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  NissanGT - R{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  Sport
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-2.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $80.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  Rolls-Royce{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  Sedan
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-3.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $96.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  All New Rush{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-5.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $72.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  CR - V{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-6.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $80.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  All New Terios{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-7.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $74.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  MG ZX Exclusice{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  Hatchback
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-10.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $76.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  NEW MG ZS{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-9.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $80.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[380px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                  MG ZX Excite{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription className="font-bold text-[#90A3BF]">
                  Hatchback
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-8">
                <Image src={"/car-10.png"} alt="" width={350} height={350} />
                <Image
                  src={"/shadow.png"}
                  alt="Shadow"
                  width={256}
                  height={24}
                  className="absolute w-[330px] h-20"
                />
                <Image
                  src={"/Spesification.png"}
                  alt=""
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="font-bold text-xl">
                  $74.00/
                  <span className="text-[#90A3BF] text-base ml-1">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
