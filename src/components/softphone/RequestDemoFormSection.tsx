import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RequestDemoFormSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
        REQUEST A DEMO
      </h2>
      <div className="bg-white border-8 border-black p-8 shadow-brutal">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-lg font-bold">
                FIRST NAME
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-lg font-bold">
                LAST NAME
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="workEmail" className="text-lg font-bold">
              WORK EMAIL
            </Label>
            <Input
              id="workEmail"
              type="email"
              placeholder="Enter your work email"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobilePhone" className="text-lg font-bold">
              MOBILE PHONE NUMBER
            </Label>
            <Input
              id="mobilePhone"
              type="tel"
              placeholder="Enter your mobile phone number"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-lg font-bold">
              COMPANY NAME
            </Label>
            <Input
              id="companyName"
              placeholder="Enter your company name"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="websiteUrl" className="text-lg font-bold">
              WEBSITE URL
            </Label>
            <Input
              id="websiteUrl"
              type="url"
              placeholder="Enter your website URL"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="numEmployees" className="text-lg font-bold">
              NUMBER EMPLOYEES
            </Label>
            <Input
              id="numEmployees"
              type="number"
              placeholder="Enter number of employees"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg font-bold">
              MESSAGE
            </Label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
              className="w-full border-4 border-black p-4 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 resize-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white border-4 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:translate-y-1 hover:shadow-none transition-all w-full md:w-auto"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
