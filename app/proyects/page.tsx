"use client";

import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import Aos from "aos";

import Modal from "../../components/modal";

import { title, subtitle } from "@/components/primitives";
import ASegurosImg from "@/assets/images/agseguros.png";
import GuanaGoImg from "@/assets/images/guanago.png";
import EdufyImg from "@/assets/images/edufy.png";
import CosechaFacilImg from "@/assets/images/cosecha.png";

import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        data-aos="fade-down"
        className="inline-block max-w-lg text-center justify-center"
      >
        <h1 className={title()}>Personal&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Proyects&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-5" })}>
          Here you can find all the projects that I have done in my journey as a
          computer engineering student at ULACIT.
        </h2>
      </div>
      <div className="max-w-[1300px] px-8 py-12">
        <div
          data-aos="fade-up"
          className="flex justify-center gap-20 flex-col flex-wrap sm:flex-row"
        >
          <Card
            data-aos="fade-right"
            isFooterBlurred
            className="w-full h-[300px] sm:w-[500px]" // Ajuste de tamaño de la tarjeta
          >
            <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
              <p className="text-tiny text-white/60 uppercase font-bold">
                GUANAGO
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={GuanaGoImg.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className=" w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                />
              </div>
              <Modal
                modalContent={
                  <div className="flex flex-col gap-2 ">
                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        HTML to structure the project.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        />
                      </div>
                      <p className="flex-grow">CSS to style the project.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        JavaScript to add interactivity.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        React to build the user interface.
                      </p>
                    </div>

                    <div className="flex justify-center items-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        />
                      </div>
                      <p className="flex-grow">Java to develop the backend.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Spring as a Java framework for development and REST
                        services.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        MySQL as a database management system.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Node.js as a server-side environment for the project.
                      </p>
                    </div>
                  </div>
                }
                link={"https://github.com/Joseph1799/GuanaGo"}
              />
            </CardFooter>
          </Card>
          <Card
            data-aos="fade-left"
            isFooterBlurred
            className="w-full h-[300px] sm:w-[500px]" // Ajuste de tamaño de la tarjeta
          >
            <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
              <p className="text-tiny text-black/80 uppercase font-bold">
                EDUFY
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={EdufyImg.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className=" w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                />
              </div>
              <Modal
                modalContent={
                  <div className="flex flex-col gap-2 ">
                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        HTML to structure the project.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        />
                      </div>
                      <p className="flex-grow">CSS to style the project.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        JavaScript to add interactivity.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Microsoft SQL Server as a database management system.
                      </p>
                    </div>

                    <div className="flex justify-center items-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                        />
                      </div>
                      <p className="flex-grow">C# to develop the backend.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Node.js as a server-side environment for the project.
                      </p>
                    </div>
                  </div>
                }
                link={"https://github.com/Joseph1799/Edufy"}
              />
            </CardFooter>
          </Card>
          <Card
            data-aos="fade-right"
            isFooterBlurred
            className="w-full h-[300px] sm:w-[500px]" // Ajuste de tamaño de la tarjeta
          >
            <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
              <p className="text-tiny text-black/80 uppercase font-bold">
                VITAL CARE
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={ASegurosImg.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
                />
              </div>
              <Modal
                modalContent={
                  <div className="flex flex-col gap-2 ">
                    <div className="flex justify-center items-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Java/JavaFX to develop the App.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Adobe Illustrator to design the App.
                      </p>
                    </div>
                  </div>
                }
                link={"https://github.com/Joseph1799/AgenciaDeSeguros"}
              />
            </CardFooter>
          </Card>
          <Card
            data-aos="fade-left"
            isFooterBlurred
            className="w-full h-[300px] sm:w-[500px]" // Ajuste de tamaño de la tarjeta
          >
            <CardHeader className="absolute z-10 flex-col items-start backdrop-blur">
              <p className="text-tiny text-white/60 uppercase font-bold">
                COSECHA FACIL
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={CosechaFacilImg.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className=" w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                />
                <Image
                  alt="Breathing app icon"
                  className="w-7 h-11"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                />
              </div>
              <Modal
                modalContent={
                  <div className="flex flex-col gap-2 ">
                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        HTML to structure the project.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        />
                      </div>
                      <p className="flex-grow">CSS to style the project.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        JavaScript to add interactivity.
                      </p>
                    </div>

                    <div className="flex justify-center items-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        />
                      </div>
                      <p className="flex-grow">Java to develop the backend.</p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Spring as a Java framework for development and REST
                        services.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        Pyhton for tasks automation and data analysis.
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-gray-600 rounded-lg p-4">
                      <div className="flex justify-center w-8 h-11 flex-shrink-0 mr-3">
                        <Image
                          alt="Breathing app icon"
                          className="w-full h-full"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                        />
                      </div>
                      <p className="flex-grow">
                        MySQL as a database management system.
                      </p>
                    </div>
                  </div>
                }
                link={"https://github.com/Joseph1799/CosechaFacil"}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
