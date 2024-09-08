"use client"
import Button from "@/_components/Button/Button";
import HeroVideo from "@/_components/HeroVideo/HeroVideo";
import ArrowRight from "@/_components/Icons/ArrowRight";
import InfiniteScroller from "@/_components/InfiniteScroller/InfiniteScroller";
import MarketingToolsInfiniteScoller from "@/_components/MarketingToolsInfiniteScoller/MarketingToolsInfiniteScoller";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, use, useEffect, useRef, useState } from "react";
import Woman1 from "@/assets/images/pfp/woman-in-coat.jpg";
import Woman2 from "@/assets/images/pfp/woman-in-coat-2.jpg";
import Man1 from "@/assets/images/pfp/man-in-coat.jpg";
// import HeroVideoContent from "@/assets/videos/hero-video.mp4";
// const HeroVideoContent = require("@/assets/videos/hero-video.mp4");

const testStringsForInfScroll = [
  "Damon",
  "Stefan",
  "Bonnie",
  "Elena",
  "Elijha",
  "Klaus",
  "Rebekah",
  "Caroline",
  "Tylor",
  "Jerremy",
  "Mikael",
  "Olivia",
  "Josh",
  "Davina",
  "Ester",
  "Camil",
  "Jenna",
  "Katherine",
  "Kol",
  "Finn",
  "Jonathan"
]

export default function Home() {
  const rootComponentRef = useRef<HTMLElement>(null);
  const [heroVideoBackgroundWidth, setHeroVideoBackgroundWidth] = useState<number>(0);
  useEffect(() => {
    return;
    if(rootComponentRef.current) {
      rootComponentRef.current?.addEventListener("scroll", (e) => {
        console.log("rootComponentRef.current?.scrollTop - ",rootComponentRef.current?.scrollTop)
      })
    }
    
  }, [rootComponentRef.current]);

  useEffect(() => {
    return;
    const body = document.getElementsByTagName("body")[0];
    body.onscroll = (e) => {
      console.log("window.scrollY - ", window.scrollY);
      const scrollAmount = window.scrollY / body.scrollHeight;
      setHeroVideoBackgroundWidth(5000 * scrollAmount + 100);
    }
  }, []);

  useEffect(() => {
    return;
    window.addEventListener("wheel", (e) => {
      e.preventDefault();
      console.log("e.deltaY - ", e.deltaY);
      const scrollAmount = 0.1;
      window.scrollBy({top: e.deltaY * scrollAmount});
    },{passive: false});
  }, []);
  return (
    <main 
      className=" w-full bg-tertiary pt-[138px]" 
      ref={rootComponentRef}
    >
      <h1
        className="text-[56px] md:text-[84px] lg:text-[6.6666666667vw] 
                  font-semibold whitespace-pre-line text-center leading-[90%] 
                  tracking-[-.05em] animate-fadeIn"
      >{"Personalized\nAI videos"}
      </h1>
      <p
        className="whitespace-pre-line text-[17px] md:text-2xl font-medium text-center tracking-[-.02em] leading-[130%] mt-[65px]"
      >
        {"Boost response rates by up to "}<b className="font-semibold" >500%</b>{"\nusing Potion's Dynamic Video personalization"}
      </p>
      <div
        className="flex justify-center mt-[50px]"
      >
        <Button
          className="w-[329.14px] h-[104px] flex items-center justify-center gap-x-[12.6px] 
                     scale-x-0 animate-[scaleX_1.2s_cubic-bezier(0,.89,.06,1.38)_forwards] 
                     *:opacity-0 *:animate-fadeIn *:[animation-delay:700ms]"
        >
          <div
            className="text-[28px] font-medium uppercase tracking-[-.04em] leading-[70px]"
          >Try for Free</div>
          <ArrowRight
            className="text-white w-[25.2px] h-[25.2px]"
          />
        </Button>
      </div>

      <div className="text-8xl font-semibold text-center align-text-bottom tracking-[-.05em] leading-[90%]" >
        Trusted by<br /><div>{'10000+ sales reps'}
        <div
          className="relative w-[86px] h-[86px] inline-block ml-9 top-4"
        >
          <Image
            src={Woman1}
            alt="Woman1"
            width={86}
            height={86}
            className="absolute rounded-full -left-[18px] z-[3]"
          />
          <Image
            src={Woman2}
            alt="Woman2"
            className="absolute rounded-full z-[2]"
          />
          <Image
            src={Man1}
            alt="Man1"
            className="absolute rounded-full left-[18px] z-[1]"
          />
        </div>
        </div>
      </div>

      {/* <div
        className="flex items-center justify-center mt-[41px]"
      >
        <div
          className="bg-[#6d27a1] rounded-full absolute"
          style={{
            width: heroVideoBackgroundWidth,
            height: heroVideoBackgroundWidth,
          }}
        ></div>
        <HeroVideo
          src="/videos/hero-video.mp4"
        />
      </div> */}

      {/* <InfiniteScroller
        className="gap-x-[30px] border border-blue-900 w-[300px] h-[60px] ml-[50%] rounded-full"
      >
        {
          testStringsForInfScroll.map(item => {
            return (
              <div className="bg-red-500" >{item}</div>
            )
          })
        }
        Hank
        John
      </InfiniteScroller> */}

      <MarketingToolsInfiniteScoller 
        className="mx-[15px] mt-16 w-auto"
      />
    </main>
  );
}
