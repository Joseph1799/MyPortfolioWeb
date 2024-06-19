"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import Aos from "aos";

import MustangImg from "../../assets/images/NewJersey.jpeg";
import PlaneImg from "../../assets/images/Plane.jpg";
import QuoteImg from "../../assets/images/NewYork.jpg";
import FarmImg from "../../assets/images/DukeFarms.jpeg";
import NewYorkImg from "../../assets/images/NewYork4.jpg";
import UlacitImg from "../../assets/images/Ulacit.png";
import RvccImg from "../../assets/images/RVCC.png";

import { title, subtitle } from "@/components/primitives";
import "aos/dist/aos.css";

export default function AboutMePage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        data-aos="fade-down"
        className="inline-block max-w-lg text-center justify-center"
      >
        <h1 className={title()}>About&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Me&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-5" })}>
          Here you can find a little bit about me and my journey as a software
          engineer.
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-10"
      >
        <Card
          data-aos="fade-up"
          className="col-span-12 sm:col-span-4 h-[300px]"
        >
          <CardHeader className="absolute z-10 top-0 flex-col !items-start backdrop-blur">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New York - Times Square
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={QuoteImg.src}
          />
        </Card>
        <Card
          data-aos="fade-up"
          className="col-span-12 sm:col-span-4 h-[300px]"
        >
          <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New Jersey - Duke Farms
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={FarmImg.src}
          />
        </Card>
        <Card
          data-aos="fade-up"
          className="col-span-12 sm:col-span-4 h-[300px]"
        >
          <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New York - Times Square
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full -translate-x-2 object-cover"
            src={NewYorkImg.src}
          />
        </Card>
        <Card
          data-aos="fade-up"
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
            <p className="text-tiny text-white/60 uppercase font-bold">
              American Airlines
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-100 -translate-y-0 object-cover"
            src={PlaneImg.src}
          />
        </Card>
        <Card
          data-aos="fade-up"
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New Jersey - Road Trip
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={MustangImg.src}
          />
        </Card>
      </div>
      <div
        data-aos="fade-right"
        className="inline-block max-w-lg text-center justify-center mt-20"
      >
        <h1 className={title({ color: "blue" })}>Education&nbsp;</h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row gap-10 py-8 md:py-10 justify-center w-full max-w-screen-lg mx-auto"
      >
        <Card data-aos="fade-up" className="max-w-[400px] min-w-[370px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="ulacit logo"
              height={40}
              radius="sm"
              src={UlacitImg.src}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">University of Science and Technology</p>
              <p className="text-small text-default-500">2022 - 2025</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Bachelor&apos;s Degree in Computer Science</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.ulacit.ac.cr/">
              Visit Site
            </Link>
          </CardFooter>
        </Card>
        <Card data-aos="fade-up" className="max-w-[400px] min-w-[370px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="rvcc logo"
              height={40}
              radius="sm"
              src={RvccImg.src}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Raritan Valley Community College</p>
              <p className="text-small text-default-500">2018 - 2019</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>English as a Second Languague</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.raritanval.edu/">
              Visit Site
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div
        data-aos="fade-up"
        className="inline-block w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-left border border-gray-900 rounded-lg p-4"
      >
        <h2 className="mt-2 text-md">
          As a passionate computer science student at ULACIT, I&apos;m on a
          journey of continuous learning and growth. I&apos;ve specialized in
          Java, Spring Boot, and SQL, areas where I&apos;ve invested time and
          effort to reach an advanced level. But my curiosity and thirst for
          knowledge don&apos;t stop there; I also master a variety of languages
          and tools, from Unix and Git to C#, Python, and Kotlin. This
          versatility allows me to approach challenges from different angles and
          adapt quickly to new technologies and environments. <br />
          <br />
          Furthermore, my expertise extends beyond application development,
          encompassing cloud computing through Amazon Web Services (AWS) and web
          development technologies like HTML, CSS, and JavaScript. This breadth
          of knowledge enables me to tackle projects comprehensively, from
          conceptualization to implementation and delivery.
          <br />
          <br />
          In summary, my approach to computer science goes beyond acquiring
          technical skills; it&apos;s about using technology as a tool to
          innovate, create, and improve the world around us. I&apos;m committed
          to continuing to grow as a professional and making the most of every
          opportunity that arises in this exciting field.
        </h2>
      </div>
    </section>
  );
}
