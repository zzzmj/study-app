'use client'

import CalcProgress from "@/components/CalcProgress"
import { Text } from "@mantine/core"
import { useState } from "react"


const MixedRatePage = () => {
    const [progress, setProgress] = useState<number>(0)


    return <div className="">

        <CalcProgress value={progress} />
        <Text className="mt-4 flex-center" c={'dimmed'} fz="lg" fw={500}>
            误差控制在3%以内
        </Text>
    </div>
}

export default MixedRatePage
