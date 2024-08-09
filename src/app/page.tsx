import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const museums = [
  {
    name: "Samarkand Museum",
    description:
      "Explore the rich cultural heritage and stunning architecture of Uzbekistan&apos;s top museums. Book your tickets now for an unforgettable experience.",
    image: "/placeholder.svg",
  },
  {
    name: "Khiva Museum",
    description:
      "Discover the architectural wonders and ancient history of the Silk Road city of Khiva.",
    image: "/placeholder.svg",
  },
  {
    name: "Nukus Museum",
    description:
      "Explore the world&apos;s second-largest collection of Russian avant-garde art at the Nukus Museum.",
    image: "/placeholder.svg",
  },
  {
    name: "Tashkent Museum",
    description:
      "Discover the rich history and culture of Uzbekistan&apos;s capital city at the Tashkent Museum.",
    image: "/placeholder.svg",
  },
  {
    name: "Bukhara Museum",
    description:
      "Explore the architectural wonders and ancient history of the Silk Road city of Bukhara.",
    image: "/placeholder.svg",
  },
  {
    name: "Termez Museum",
    description:
      "Discover the ancient history and archaeological wonders of Termez, a city on the Silk Road.",
    image: "/placeholder.svg",
  },
];

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-8 md:pt-24 lg:py-14 ">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] items-center mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover the Wonders of Uzbekistan&apos;s Museums
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore the rich cultural heritage and stunning architecture
                  of Uzbekistan&apos;s top museums. Book your tickets now for an
                  unforgettable experience.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Top Museums in Uzbekistan
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the most renowned museums in Uzbekistan, each
                  offering a unique glimpse into the country&apos;s rich history and
                  culture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {museums.map((museum) => (
                <div key={museum.name} className="grid gap-2">
                  <img
                    src={museum.image}
                    width="550"
                    height="310"
                    alt="Museum"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                  <Link href={`/museum/${museum.name}`}></Link>
                  <p className="text-sm text-muted-foreground">
                    {museum.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Find and Book Tickets for Uzbekistan&apos;s Top Museums
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our search tool to explore and book tickets for the most
                popular museums in Uzbekistan.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search for a museum"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
