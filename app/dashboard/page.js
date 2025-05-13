'use client'
import Basket from "@/components/Basket";
import Football from "@/components/Football";
import Main from "@/components/Main";
import { useSearchParams } from 'next/navigation';


export default function DashboardPage() {

    const searchParams = useSearchParams();
    const sport = searchParams.get('sport');


    let children = (
        <Basket />
    )

    if (sport === 'football') {
        children = (
            <Football />
        )
    }

    return (
        <Main>
            {children}
        </Main>
    )
}