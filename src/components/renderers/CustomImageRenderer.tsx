"use client";

import Image from "next/image";

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;

  return (
    <div className="relative w-full min-h-[15rem]">
      <Image
        alt="image"
        className="object-cover"
        src={src}
        width={1024}
        height={1024}
      />
    </div>
  );
}

export default CustomImageRenderer;
