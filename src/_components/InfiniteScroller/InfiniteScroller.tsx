import { cn } from "@/utils/misc";
import React,{ ReactElement, ReactNode } from "react";
import "./InfiniteScroller.css";

type TInfiniteScroller = {
    className?: string;
    childrenWrapperClassName?: string;
    childrenWrapperClassName1?: string;
    childrenWrapperClassName2?: string;
    children?: ReactNode;
    childClassName?: string;
}

export default function InfiniteScroller({
    className,
    children,
    childrenWrapperClassName,
    childrenWrapperClassName1,
    childrenWrapperClassName2,
    childClassName,
}:TInfiniteScroller) {
    const Children = React.Children.map(children, (child) => {
        if (["string" , "number" , "bigint", "boolean"].findIndex(i => i === typeof child) !== -1) {
            return <div className={cn(childClassName)} >{child}</div>
        }
        return React.cloneElement(child as ReactElement)
    })
    return (
        <div 
            className={
            cn(
                "relative flex items-center overflow-hidden w-96 h-14",
                className,
            )} 
        >
            <div
                className={
                    cn("absolute w-min flex items-center animate-leftToRightInfiniteScroll [animation-delay:-10s]",
                        childrenWrapperClassName, childrenWrapperClassName1
                    )}
            >{Children}</div>
            <div
                className={
                    cn("absolute w-min flex items-center animate-leftToRightInfiniteScroll",
                        childrenWrapperClassName, childrenWrapperClassName2
                    )}
            >{Children}</div>
        </div>
    )
}