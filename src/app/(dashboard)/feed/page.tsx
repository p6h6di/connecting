import CustomFeed from "@/components/homepage/CustomFeed";
import { getAuthSession } from "@/lib/auth";
import { P } from "@upstash/redis/zmscore-4382faf4";
import React from "react";

const FeedPage = async () => {
  const session = await getAuthSession();
  return (
    <div className="my-20">
      {session ? <CustomFeed /> : <p>You are not authorized.</p>}
    </div>
  );
};

export default FeedPage;
