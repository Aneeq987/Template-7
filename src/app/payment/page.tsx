import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment Plus_Jakarta_Sans w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[100%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-full h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Name
                </label>
                <Input
                  placeholder="Your Name"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Phone Number
                </label>
                <Input
                  placeholder="Your Phone Number"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Address
                </label>
                <Input
                  placeholder="Your Address"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Town/City
                </label>
                <Input
                  placeholder="Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-full h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <Image
                src={"/Pick - Up (1).png"}
                alt="Pick Up"
                width={92}
                height={20}
              />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Locations
                </label>
                <select
                  title="city"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Date
                </label>
                <select
                  title="cty"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">
                  Time
                </label>
                <select
                  title="cit"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="fourth">
              <Image
                src={"/Drop - Off (1).png"}
                alt="Drop Off"
                width={104}
                height={20}
              />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Locations
                </label>
                <select
                  title="city"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Date
                </label>
                <select
                  title="cty"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">
                  Time
                </label>
                <select
                  title="cit"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-full h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Image
              src={"/Credit Card.png"}
              alt="Credit Card"
              width={804}
              height={308}
            />
            <Image src={"/PayPal.png"} alt="PayPal" width={804} height={56} />
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={804} height={56} />
          </CardContent>
        </Card>

        <Card className="w-full lg:w-full h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>
                We are getting to the end. Just a few clicks and your rental is
                ready
              </h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <Image
              src={"/Confirmation.png"}
              alt="Confirmation"
              width={804}
              height={136}
            />
            <Link href={"/admin"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                Rent Now
              </button>
            </Link>

            <Image
              src={"/Safe Data.png"}
              alt="Safe Data"
              width={548}
              height={100}
            />
          </CardContent>
        </Card>
      </div>
      <div className="details w-full flex-shrink-0 lg:w-[492px] order-1 lg:order-2 flex justify-center">
        <div className="rental-summary bg-white p-6 rounded-lg shadow-lg w-[492px] h-[492px]">
          {/* Title */}
          <h2 className="text-lg font-bold">Rental Summary</h2>
          <p className="text-sm text-[#90A3BF] mt-1 font-medium">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>

          {/* Car Details */}
          <div className="car-details flex items-center mt-6">
            <div className="car-image bg-blue-100 w-28 h-20 rounded-lg flex-shrink-0">
              <Image
                src="/look.png"
                alt="Car"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">Nissan GT – R</h3>
              <div className="flex items-center text-sm text-[#90A3BF]">
                <span className="text-yellow-500 mr-1">★★★★☆</span>
                <span>440+ Reviewer</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#90A3BF] font-medium">Subtotal</span>
              <span className="text-sm font-semibold">$80.00</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-[#90A3BF] font-medium">Tax</span>
              <span className="text-sm font-semibold">$0</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Apply promo code"
                className={`flex-1 px-6 py-4 bg-[#f6f7f9] ${'placeholder:text-[#90A3BF] placeholder:font-medium'} text-sm focus:outline-none`}
              />
              <button className="px-4 py-2 bg-[#f6f7f9] text-black text-sm font-bold">
                Apply now
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-6 border-t flex justify-between items-center border-gray-200 pt-4">
            <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total Rental Price</span>
            </div>
            <p className="text-sm text-[#90A3BF] font-medium mt-1">
              Overall price and includes rental discount
            </p>
            </div>
              <span className="text-3xl font-bold">$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
