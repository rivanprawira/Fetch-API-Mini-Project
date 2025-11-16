"use client";

import { useRouter } from "next/navigation";

const wrapper = `
  w-full
  flex
  justify-end
`;

const button = `
  bg-[#22F402]/40
  rounded-[10px]
  w-[clamp(175px,12vw,280px)]
  h-[clamp(41px,4vw,50px)]

  hover:bg-[#22F402]

  items-center justify-center
  text-[clamp(18px,1vw,22px)]
`;

export default function CreateButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/create");
  };

  return (
    <div className={wrapper}>
      <button onClick={handleClick} className={button}>
        + Create Comment
      </button>
    </div>
  );
}
