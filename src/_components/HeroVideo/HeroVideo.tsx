import { cn } from "@/utils/misc";

type THeroVideo = {
    src: string;
    className?: string;
}

export default function HeroVideo({
    className,
    src,
}: THeroVideo) {
    return (
        <video
            // src={src}
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
            className={cn(
                "rounded-full w-[395px] h-[395px]",
                className
            )}
        >
            <source src={src} type="video/mp4" />
        </video>
    )
}