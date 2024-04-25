"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <div className="bg-black">
        <section className="container pt-12 mb-20 space-y-6 ">
          <h1 className="text-[132px] font-semibold text-white">
            <span className="bg-gradient-to-r from-[#3cc796] to-[#249e74] inline-block text-transparent bg-clip-text">
              Connect
            </span>
            ing
          </h1>
          <p className="text-lg text-white/80 font-normal">
            The world&apos;s first and largest community platform. <br /> Here
            to connect people in the world!
          </p>
        </section>

        <section className="container pb-24">
          <div className="relative">
            <div className="absolute -top-28 right-48 size-72 bg-green-500 rounded-full  filter blur-xl opacity-20 z-10"></div>
            <Link
              href="/dashboard"
              className="absolute -top-10 right-72 p-6 rounded-full border-2 border-black bg-[linear-gradient(110deg,#1D976C,55%,#93F9B9)] bg-[length:200%_100%] z-50 flex items-center transform hover:scale-105 duration-200 transition-colors"
            >
              <Icons.arrow_down className="size-8 cursor-pointer" />
            </Link>
            <ImageSlider
              className="w-full h-80 z-30 relative"
              images={images}
            />
          </div>
        </section>
      </div>

      <section className="bg-white text-black grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-100 rounded-br-2xl p-24">
          <div className="relative">
            <span className="absolute top-0 right-[366px] size-6 bg-green-500/80 rounded-full"></span>
            <span className="absolute top-0 right-[356px] size-6 bg-purple-500/80 rounded-full"></span>
            <h1 className="text-7xl font-semibold antialiased tracking-wide pb-8">
              Vision
            </h1>
          </div>
          <h3 className="text-xl font-normal antialiased pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ullam nisi quia enim tempore magni!
          </h3>
          <hr className="pb-8" />
          <p className="text-base font-normal text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quaerat ullam tempora quidem non fuga aperiam aliquam cupiditate
            expedita nemo qui, eaque impedit natus doloribus quod alias
            quibusdam, consequatur officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias ex tenetur totam aspernatur
            enim fugit! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Tempore, dolor rem dignissimos ad voluptatum iste, fuga
            expedita esse explicabo eligendi illum error accusantium eveniet
            enim ipsum vero, praesentium beatae. Necessitatibus?
          </p>
        </div>
        <div className="p-24">
          <div className="relative pb-16">
            <span className="absolute top-0 right-[320px] size-6 bg-green-500/80 rounded-full"></span>
            <span className="absolute top-0 right-[310px] size-6 bg-purple-500/80 rounded-full"></span>
            <h1 className="text-7xl font-semibold antialiased">Mission</h1>
          </div>

          <div className="flex gap-8 pb-6">
            <div className="text-xl text-muted-foreground">01</div>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold antialiased mb-3">
                Be the best
              </h1>
              <p className="text-base leading-6 text-muted-foreground font-normal antialiased">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quae, id aliquam quaerat nihil assumenda?
              </p>
            </div>
          </div>
          <hr className="pb-8" />

          <div className="flex gap-8 pb-6">
            <div className="text-xl text-muted-foreground">02</div>
            <div>
              <h1 className="text-xl font-semibold antialiased mb-3">
                Be the largest platform
              </h1>
              <p className="text-base leading-6 text-muted-foreground font-normal antialiased">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quae, id aliquam quaerat nihil assumenda?
              </p>
            </div>
          </div>
          <hr className="pb-8" />

          <div className="flex gap-8 pb-6">
            <div className="text-xl text-muted-foreground">03</div>
            <div>
              <h1 className="text-xl font-semibold antialiased mb-3">
                Make impact
              </h1>
              <p className="text-base leading-6 text-muted-foreground font-normal antialiased">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quae, id aliquam quaerat nihil assumenda?
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section className=" bg-white text-black py-24">
        <div className="container">
          <div className="relative">
            <span className="absolute top-0 left-[280px] size-6 bg-green-500/80 rounded-full"></span>
            <span className="absolute top-0 left-[292px] size-6 bg-purple-500/80 rounded-full"></span>
            <h1 className="text-7xl font-semibold antialiased tracking-wide pb-8">
              Features
            </h1>
          </div>
          <p className="w-2/5 text-base font-normal antialiased text-muted-foreground leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dignissimos vero odit consequuntur sint cumque!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
            <div className="border border-r-0 border-b-0 border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">Next.js 14</h1>
                <Link href="https://nextjs.org" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                App dir, Routing, Layouts, Loading UI and API routes.
              </p>
            </div>
            <div className="border border-r-0 border-b-0 border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">React 18</h1>
                <Link href="https://react.dev" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                Server and Client Components. Use hook.
              </p>
            </div>
            <div className="border border-b-0 border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">Database</h1>
                <Link href="https://supabase.com" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                ORM using Prisma and deployed on Supabase.
              </p>
            </div>
            <div className="border border-r-0 border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">Components</h1>
                <Link href="https://tailwindcss.com" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                UI components built using Radix UI and styled with Tailwind CSS.
              </p>
            </div>
            <div className="border border-r-0 border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">Authentication</h1>
                <Link href="https://next-auth.js.org" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                Authentication using NextAuth.js and middlewares.
              </p>
            </div>
            <div className="border border-black p-12">
              <div className="flex items-center justify-between mb-24">
                <h1 className="text-xl font-semibold">Uploadthing</h1>
                <Link href="https://uploadthing.com" target="_blank">
                  <Icons.arrow_up_right className="size-8" />
                </Link>
              </div>
              <p className="text-base leading-6 font-normal antialiased text-black/90">
                File uploads to your full stack TypeScript application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        {/* <!-- Container --> */}
        <div className="container px-5 py-16 md:px-10 md:py-24">
          {/* <!-- Heading Div --> */}
          <div className="text-center mb-16 flex items-center">
            <span className="h-px flex-1 bg-gray-500/30"></span>
            <div className="relative">
              <span className="absolute -top-2 right-2 size-6 bg-green-500/80 rounded-full"></span>
              <span className="absolute -top-2 -right-1 size-6 bg-purple-500/80 rounded-full"></span>
              <h2 className="text-3xl font-semibold md:text-5xl shrink-0 px-6">
                Team Members
              </h2>
            </div>
            <span className="h-px flex-1 bg-gray-500/30"></span>
          </div>
          {/* <!-- Team Div --> */}
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"
                alt=""
                className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
              />
              <p className="mb-2 text-2xl font-semibold">John Brooklyn</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap">
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be38447c887bfd955b8_InstagramLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
                >
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be16658297f6be979d2_TwitterLogo.svg"
                    alt=""
                    className="inline-block h-full w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black">
        <div className="relative z-0">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-32">
            <div className="text-center">
              <a
                className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 hover:before:bg-black before:-z-10 before:transition-colors before:duration-500 group"
                href="/dashboard"
              >
                {/* <!-- NameFake Button --> */}
                <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-black transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 before:absolute before:w-1/2 before:pb-[100%] before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
                  <Link
                    href="/dashboard"
                    className="relative whitespace-nowrap"
                  >
                    {/* <!-- Default content: "Build the UI you need" --> */}
                    <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                      Let's connect
                    </span>
                    {/* <!-- Hover content: "Create beautiful user interfaces" --> */}
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-black/70 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-[''The_largest_community_platform''] after:content-['The_largest_community_platform'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll"
                      aria-hidden="true"
                    ></span>
                  </Link>
                </span>

                {/* <!-- Text: "with Cruip" --> */}
                <span className="group-hover:text-slate-300 transition-colors duration-500 ease-in-out">
                  with People
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
