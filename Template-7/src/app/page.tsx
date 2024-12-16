import Image from "next/image";
import Link from "next/link";
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen Plus_Jakarta_Sans p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="first w-full flex flex-wrap max-w-full mx-auto sm:flex-nowrap gap-4 sm:gap-8 justify-between">
        <div className="flex flex-col justify-center text-white p-8 rounded-xl bg-[url('/Ads-1.png')] bg-cover bg-center w-full mx-auto">
          {/* Left Content */}
          <div className="max-w-full flex-col ">
            <h1 className="text-4xl font-medium mb-4">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="text-lg mb-6">
              Ease of doing a car rental safely and <br /> reliably. Of course at a low
              price.
            </p>
            <button className="bg-[#3563E9] hover:bg-[#3562e9d2] text-white px-6 py-3 rounded-lg font-semibold">
              <Link href="/details">Rental Car</Link>
            </button>
          </div>

          {/* Right Image */}
          <div className=" flex justify-center items-center">
            <Image
              src="/car-1.png" // Replace this with your car image path
              alt="Car"
              width={400}
              height={400}
              className="mx-36 pt-2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white p-8 rounded-xl bg-[url('/Ads-2.png')] bg-cover bg-center w-full mx-auto">
          {/* Left Content */}
          <div className="max-w-full flex-col ">
            <h1 className="text-4xl font-medium mb-4">
            Easy way to rent a <br /> car at a low price
            </h1>
            <p className="text-lg mb-6">
            Providing cheap car rental services <br /> and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] hover:bg-[#54a7ffe0] text-white px-6 py-3 rounded-lg font-semibold">
              <Link href="/details">Rental Car</Link>
            </button>
          </div>

          {/* Right Image */}
          <div className=" flex justify-center items-center">
            <Image
              src="/car-2.png" // Replace this with your car image path
              alt="Car"
              width={400}
              height={400}
              className="mx-36 pt-2"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={582}
          height={132}
          className="max-w-full"
        />
        <Image
          src={"/Switch.png"}
          alt=""
          width={60}
          height={60}
          className="max-w-full"
        />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={582}
          height={132}
          className="max-w-full"
        />
      </section>

      <section className="popular w-full flex flex-col gap-6 max-w-full mx-auto">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                Koenigsegg{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-1.png"} alt="" width={350} height={350}/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $99.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                NissanGT - R{" "}
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-2.png"} alt="" width={350} height={350}/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                Rolls-Royce{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-3.png"} alt="" width={350} height={350}/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $96.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                NissanGT - R{" "}
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-4.png"} alt="" width={350} height={350}/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
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

      <section className="popular w-full flex flex-col gap-4 max-w-full mx-auto">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                All New Rush{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-5.png"} alt="" width={350} height={350} className=""/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $72.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                CR - V{" "}
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-6.png"} alt="" width={350} height={350} className=""/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                All New Terios{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-7.png"} alt="" width={350} height={350} className=""/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $74.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                CR - V{" "}
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-8.png"} alt="" width={350} height={350} className=""/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                MG ZX Exclusice{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-10.png"} alt="" width={350} height={350} />
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $76.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                NEW MG ZS{" "}
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-9.png"} alt="" width={350} height={350}/>
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                MG ZX Excite{" "}
                <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-10.png"} alt="" width={350} height={350} />
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $74.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] py-3 px-6 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[400px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center text-xl justify-between font-bold">
                New MG ZS
                <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription className="font-bold text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-8">
              <Image src={"/car-11.png"} alt="" width={350} height={350} />
              <Image src={"/shadow.png"} alt="Shadow" width={256} height={24} className="absolute w-[340px] h-24" />
              <Image
                src={"/Spesification.png"}
                alt=""
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">
                $80.00/<span className="text-[#90A3BF] text-base ml-1">day</span>
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

      <section className="button flex items-center justify-between w-full text-center">
        <div className="h-ful"></div>
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-8 pt-4 pb-3 font-medium text-white rounded-md">
            Show more cars
          </button>
        </Link>
        <div className="flex items-center justify-center">
          <h3 className="pt-4 pb-3 mr-6 text-base text-[#90A3BF]">120 Car</h3>
        </div>
      </section>
    </div>
  );
}
