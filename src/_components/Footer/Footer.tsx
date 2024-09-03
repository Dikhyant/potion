import FooterNavItem from "../FooterNavItem/FooterNavItem";
import FooterSocialNavItem from "../FooterSocialNavItem/FooterSocialNavItem";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import PotionIcon from "../Icons/PotionIcon";
import XIcon from "../Icons/XIcon";
import YouTubeIcon from "../Icons/YouTubeIcon";

type TFooterNavItem = React.ComponentProps<typeof FooterNavItem>;
const footerNavItems:TFooterNavItem[] = [
    {
        text: "Chrome Extension",
        href: ""
    },
    {
        text: "Knowledge Base",
        href: ""
    },
    {
        text: "FAQs",
        href: ""
    },
    {
        text: "Pricing",
        href: ""
    },
    {
        text: "Case Studies",
        href: ""
    },
    {
        text: "Blog",
        href: ""
    },
    {
        text: "Video email marketing",
        href: ""
    },
    {
        text: "Affiliate Program",
        href: ""
    },
    {
        text: "Values",
        href: ""
    },
    {
        text: "Integrations",
        href: ""
    },
    {
        text: "Partners",
        href: ""
    },
    {
        text: "Security",
        href: ""
    },
    {
        text: "Book a demo",
        href: ""
    },
    {
        text: "VSL Software",
        href: ""
    },
    {
        text: "Try for Free",
        href: ""
    },
    {
        text: "About us",
        href: ""
    }
] 

type TFooterSocialNavItem = React.ComponentProps<typeof FooterSocialNavItem>;
const footerSocialNavItems:TFooterSocialNavItem[] = [
    {
        children: <InstagramIcon />,
        href: ""
    },
    {
        children: <XIcon />,
        href: ""
    },
    {
        children: <FacebookIcon />,
        href: ""
    },
    {
        children: <LinkedinIcon />,
        href: ""
    },
    {
        children: <YouTubeIcon />,
        href: ""
    }
]

export default function Footer() {
    return (
        <footer className="bg-black text-white  pt-[140px] pb-[145px] " >
            <div
                className="px-[100px] mx-[168px] w-auto"
            >
                <div className="flex justify-between" >
                    <div>
                        <PotionIcon
                        />
                        <p className="whitespace-pre-line text-[28px] font-semibold tracking-[-.04em] leading-[115%] mt-[30px]" >{"Create personalized\nvideos at scale"}</p>
                    </div>
                    <div
                        className="grid grid-cols-[250px_250px] pt-[100px]"
                    >
                        {
                            footerNavItems.map(item => {
                                return (
                                    <FooterNavItem
                                        text={item.text}
                                        href={item.href}
                                        className="py-[10px]"
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex items-center" >
                    {
                        footerSocialNavItems.map(item => {
                            return (
                                <FooterSocialNavItem
                                    href={item.href}
                                    className="px-5"
                                >
                                    {item.children}
                                </FooterSocialNavItem>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}