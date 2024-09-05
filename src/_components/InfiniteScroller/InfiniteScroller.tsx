import { cn } from "@/utils/misc";
import React,{ CSSProperties, ReactElement, ReactNode, useState } from "react";
import "./InfiniteScroller.css";

type TInfiniteScroller = {
    className?: string;
    children?: ReactNode;
}

export default function InfiniteScroller({
    className,
    children,
}:TInfiniteScroller) {
    const NumberOfChildren = useState(React.Children.count(children))[0];
    console.log("NumberOfChildren - " , NumberOfChildren);
    const Children = React.Children.map(children, (child , index) => {
        if (["string" , "number" , "bigint", "boolean"].findIndex(i => i === typeof child) === -1) {
            const delay = 20 / NumberOfChildren * (NumberOfChildren - (index + 1)) * -1;
            console.log("delay - ", delay);
            return <div
                    style={{
                        animationDelay: `${delay}s`,
                    }}
                    className={cn(`absolute animate-leftToRightInfiniteScroll`)} >{child}</div>
        }
        return React.cloneElement(child as ReactElement, {
            className: "animate-leftToRightInfiniteScroll"
        })
    })
    return (
        <div className={
            cn(
                "flex items-center overflow-hidden relative",
                className,
            )} >{Children}</div>
    )
}