import Button from "@/_components/Button/Button";
import ArrowRight from "@/_components/Icons/ArrowRight";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full h-screen pt-[138px]" >
      <h1
        className="text-[102.4px] font-semibold whitespace-pre-line text-center leading-[90%] tracking-[-.05em]"
      >{"Personalized\nAI videos"}
      </h1>
      <p
        className="whitespace-pre-line text-2xl font-medium text-center tracking-[-.02em] leading-[130%] mt-[65px]"
      >
        {"Boost response rates by up to "}<b className="font-semibold" >500%</b>{"\nusing Potion's Dynamic Video personalization"}
      </p>
      <div
        className="flex justify-center mt-[50px]"
      >
        <Button
          className="w-[329.14px] h-[104px] flex items-center justify-center gap-x-[12.6px]"
        >
          <div
            className="text-[28px] font-medium uppercase tracking-[-.04em] leading-[70px]"
          >Try for Free</div>
          <ArrowRight
            className="text-white w-[25.2px] h-[25.2px]"
          />
        </Button>
      </div>
    </main>
  );
}
