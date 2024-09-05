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

const privaryAndTerms:TFooterNavItem[] = [
    {
        text: "Privacy Policy",
        href: ""
    },
    {
        text: "Terms",
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
                <div className="flex max-lg:flex-col justify-between" >
                    <div>
                        <PotionIcon
                        />
                        <p className="whitespace-pre-line text-[28px] font-semibold tracking-[-.04em] leading-[115%] mt-[30px]" >{"Create personalized\nvideos at scale"}</p>
                    </div>
                    <div
                        className="grid md:grid-cols-[250px_250px] pt-[100px]"
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

                <div className="flex items-center mt-[70px] -mx-5" >
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

                <div className="flex items-center mt-[40px] -mx-[15px]" >
                    {
                        privaryAndTerms.map(item => {
                            return (
                                <FooterNavItem
                                    text={item.text}
                                    href={item.href}
                                    className="px-[15px] text-base font-medium tracking-[-.02em] leading-4 text-granite hover:text-white"
                                />
                            )
                        })
                    }
                    <FooterNavItem
                        text={process.env.SUPPORT_EMAIL ? process.env.SUPPORT_EMAIL : "support@sendpotion.com"}
                        href=""
                        className="px-[15px] text-base font-medium tracking-[-.02em] leading-4"
                        isUnderlineVisibleWhileUnhover
                        isUnderlineOriginRight
                    />
                </div>
            </div>
        </footer>
    )
}