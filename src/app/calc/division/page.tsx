'use client'
import { useState } from "react"
import classes from './Page.module.css'
import getCalcData from '@/utils/calcUtils'
import cn from "@/utils/cn"

const Division = () => {
    const [progress, setProgress] = useState(0)

    const result = getCalcData(1, 10)
    console.log('result', result)

    return <div className={cn(classes.wrap, 'min-h-screen')}>
        <div className="flex justify-between">
            <div>{progress}/10</div>
        </div>

        <div className="flex-center">
            结果最多保留到小数点后一位
        </div>

        <div className="flex-center">
            {
                result.slice(0, 1).map((item, index) => {
                    const {
                        formula,
                        formatAnswer,
                        errorAnalysis,
                    } = item

                    return <div key={index} className="">
                        {formula}
                    </div>
                })
            }
        </div>
    </div>
}

export default Division
