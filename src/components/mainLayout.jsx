'use client'

import { scrollAnimation } from "@/lib/utils";
import { useEffect } from "react";

export default function MainLayout({ children }) {
    useEffect(() => {
        scrollAnimation();
    }, [])
    return <div className="flex flex-col h-full w-full relative">{children}</div>;
}