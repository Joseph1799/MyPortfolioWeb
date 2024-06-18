"use client";

import { Input, Textarea, Button } from "@nextui-org/react";
import { IoIosSend } from "react-icons/io";
import React, { useEffect } from "react";
import Aos from "aos";

import { title } from "@/components/primitives";

import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        data-aos="fade-down"
        className="inline-block max-w-lg text-center justify-center"
      >
        <h1 className={title()}>Contact&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Form&nbsp;</h1>
      </div>
      <div
        data-aos="fade-up"
        className="inline-block w-full md:w-4/5 lg:w-3/4 xl:w-100 border border-gray-900 rounded-lg p-4 mt-10"
      >
        <form
          action="https://formspree.io/f/xzbnnqwy"
          className="flex flex-wrap gap-4 mb-5"
          method="POST"
        >
          <Input
            required
            label="Name"
            name="Name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            required
            label="Email"
            name="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            required
            label="Subject"
            name="Subject"
            placeholder="Enter the subject"
            type="text"
          />
          <Textarea
            required
            label="Description"
            name="Description"
            placeholder="Enter your message description"
          />
          <div className="flex items-center justify-center w-full">
            <Button color="primary" endContent={<IoIosSend />} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
