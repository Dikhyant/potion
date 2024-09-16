import { cn } from "@/utils/misc";
import { ReactNode, useEffect, useRef, useState } from "react"

type TScrollResponsiveContainer = {
    className?: string;
    children?: ReactNode;
}


export default function ScrollResponsiveContainer({
    children,
    className
}: TScrollResponsiveContainer) {
    const rootComponentRef = useRef<HTMLDivElement>(null);
    const [rootComponentWidth, setRootComponentWidth] = useState<number>(1400);

    useEffect(() => {
        setRootComponentWidth(window.innerWidth);
    }, [window]);

    useEffect(() => {
        window.onscroll = (e) => {
            if(!rootComponentRef.current) return;
            const {
                top,
                bottom,
                height,
            } = rootComponentRef.current.getBoundingClientRect();
            console.log("root top = ", top);
            console.log("root bottom = ", bottom);
            if(bottom <= height * 0.96) {
                setRootComponentWidth(
                    lerp({
                        min: window.innerWidth * 0.95,
                        max: window.innerWidth * 0.97,
                        i: bottom / (height - height * 0.93)
                    })
                );
            } else {
                setRootComponentWidth(window.innerWidth);
            }
        }
    }, [rootComponentRef]);
    return (
        <div
            className={cn("mx-auto h-[700px] bg-zinc-300",className)}
            style={{
                width: rootComponentWidth,
            }} 
            ref={rootComponentRef}
        >
            {children}
        </div>
    )
}

function lerp({
    i,
    min=0,
    max=1,
}: {
    min: number,
    max: number,
    i: number,
}):number {
    if(i < 0) return min;
    if(i > 1) return max;
    return i * (max - min)
}