import GeneralFeed from "@/components/homepage/GeneralFeed";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  return (
    <>
      {/* <h1 className="font-bold text-3xl md:text-4xl">Your feed</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6 my-20">
        {/* @ts-expect-error server component */}
        <GeneralFeed />

        {/* subreddit info */}
        <div className="overflow-hidden h-fit bg-white rounded-lg border border-gray-200 order-first md:order-last">
          <div className="px-6 py-4">
            <p className="font-semibold py-3 flex items-center space-x-2">
              <Icons.home className="h-6 w-6" />
              <span className="text-xl font-medium">Home</span>
            </p>
          </div>
          <dl className="-my-8 divide-y divide-white px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-muted-foreground">
                Welcome to a place where ideas thrive and friendships develop.
                Let&apos;s create a new community and make memories together!
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: "w-full mt-4 mb-10",
              })}
              href={`/r/create`}
            >
              Create Community
            </Link>
          </dl>
        </div>
      </div>
    </>
  );
}
