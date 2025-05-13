'use client';

import { useSearchParams } from 'next/navigation';
import Basket from "@/components/Basket";
import Football from "@/components/Football";
import { Suspense } from "react";

function Content() {
    const searchParams = useSearchParams();
    const sport = searchParams.get('sport');

    if (sport === 'football') {
        return <Football />;
    }

    return <Basket />;
}

export default function DashboardClient() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    );
}
