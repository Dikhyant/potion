import Image from "next/image";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import Outreach from "@/assets/images/partner-logos/outreach.png";
import Hubspot from "@/assets/images/partner-logos/hubspot.png";
import Apollo from "@/assets/images/partner-logos/apollo.png";
import Salesloft from "@/assets/images/partner-logos/salesloft.png";
import Instantly from "@/assets/images/partner-logos/instantly.png";
import Lemlist from "@/assets/images/partner-logos/lemlist.png";
import GoHighLevel from "@/assets/images/partner-logos/gohighlevel.png";
import CloseLogo from "@/assets/images/partner-logos/close.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/utils/misc";

type LogoData = {
    src: string | StaticImport;
    alt?: string;
}

const logos:LogoData[] = [
    {
        src: Outreach,
        alt: "Outreach logo"
    },
    {
        src: Hubspot,
        alt: "Hubspot logo"
    },
    {
        src: Apollo,
        alt: "Apollo logo"
    },
    {
        src: Salesloft,
        alt: "Salesloft logo"
    },
    {
        src: Instantly,
        alt: "Instantly logo"
    },
    {
        src: Lemlist,
        alt: "Lemlist logo"
    },
    {
        src: GoHighLevel,
        alt: "GoHighLevel logo"
    },
    {
        src: CloseLogo,
        alt: "Close Logo"
    }
]

type TMarketingToolsInfiniteScoller = {
    className?: string;
}

export default function MarketingToolsInfiniteScoller({
    className,
}: TMarketingToolsInfiniteScoller) {
    return (
        <InfiniteScroller
            className={cn("border-soft-peach border rounded-full w-[1506px] h-[100px]", className)}
            childrenWrapperClassName="[animation-duration:30s]"
            childrenWrapperClassName1="[animation-delay:-15s]"
        >
            {
                logos.map(item => {
                    return (
                        <div className="w-[270px] h-[48px] flex items-center justify-center" >
                            <Image
                                src={item.src}
                                alt={item.alt ? item.alt : "Marketing tool logo"}
                            />
                        </div>
                    )
                })
            }
        </InfiniteScroller>
    )
}