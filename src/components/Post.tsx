"use client";

import { cn, formatTimeToNow } from "@/lib/utils";
import { Post, User, Vote } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { FC, useRef } from "react";
import EditorOutput from "./EditorOutput";
import PostVoteClient from "./post-vote/PostVoteClient";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar";
import { Icons } from "./Icons";

type PartialVote = Pick<Vote, "type">;

interface PostProps {
  post: Post & {
    author: User;
    votes: Vote[];
  };
  votesAmt: number;
  subredditName: string;
  currentVote?: PartialVote;
  commentAmt: number;
}

const Post: FC<PostProps> = ({
  post,
  votesAmt: _votesAmt,
  currentVote: _currentVote,
  subredditName,
  commentAmt,
}) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="border bg-white/80 p-6 rounded-xl">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src={post.author.image!} />
          <AvatarFallback>
            {post.author.name
              ?.split(" ")
              .map((namePart) => namePart.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col flex-1 space-y-3">
          <p className="text-sm font-semibold">
            {subredditName ? (
              <>
                <Link
                  href={`/r/${subredditName}`}
                  className="hover:underline underline-zinc-900 underline-offset-1"
                >
                  c/
                  {subredditName}
                </Link>
              </>
            ) : null}
            {""} • posted by u/
            {post.author.username}
          </p>
          <Link href={`/r/${subredditName}/post/${post.id}`}>
            <h1 className="text-xl font-normal line-clamp-2 tracking-normal ">
              {post.title}
            </h1>
          </Link>
        </div>
        <div className="flex justify-end text-xs font-semibold text-muted-foreground tracking-wide">
          {formatTimeToNow(new Date(post.createdAt))}
        </div>
      </div>
      <Link href={`/r/${subredditName}/post/${post.id}`}>
        <div className="flex mx-14 mt-3 ">
          <div className="text-sm font-normal antialiased tracking-wide line-clamp-6">
            <EditorOutput content={post.content} />
          </div>
        </div>
      </Link>

      <div className="flex items-center mx-14 mt-6 space-x-3">
        <PostVoteClient
          initialVotesAmt={_votesAmt}
          postId={post.id}
          initialVote={_currentVote?.type}
        />
        <div className="flex items-center space-x-1">
          <Icons.comments className="size-5" />
          <span className={cn("text-sm font-normal antialiased")}>
            {commentAmt}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
