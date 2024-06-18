"use client";

import { Link } from "@nextui-org/link";
import React, { useEffect } from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import Aos from "aos";

import PortraitImg from "../assets/images/PortraitMe.jpeg";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        className="inline-block max-w-lg text-center justify-center items-center"
        data-aos="fade-down"
      >
        <Image
          isBlurred
          alt="NextUI hero Image with delay"
          className="m-1"
          radius="full"
          src={PortraitImg.src}
          width={300}
        />
      </div>
      <div
        className="inline-block max-w-lg text-center justify-center"
        data-aos="fade-up"
      >
        <h1 className={title()}>Joseph&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Vargas&nbsp;</h1>
        <br />
        <h3>Programmer</h3>
        <h2 className={subtitle({ class: "mt-10" })}>
          I am a passionate computer engineering student at ULACIT. I have
          knowledge of{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            Java
          </Chip>{" "}
          ,{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            Spring Boot
          </Chip>{" "}
          and{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            SQL
          </Chip>{" "}
          , and I also have skills in skills in{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            Unix
          </Chip>{" "}
          ,{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            Git
          </Chip>{" "}
          ,{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            C#
          </Chip>
          ,{" "}
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-blue-500 to-teal-500 border-small border-white/50 shadow-teal-500/30",
              content:
                "drop-shadow shadow-black text-white inline-block px-2 py-1 rounded-lg",
            }}
          >
            Python
          </Chip>{" "}
          and other programming languages programming.
        </h2>
      </div>

      <div data-aos="fade-up" className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/aboutMe"
        >
          More
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="https://github.com/Joseph1799"
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
