'use client'

import { useState } from "react"
import Page from './Page.module.css'
import { Anchor, Button } from "@mantine/core"
import Link from "next/link"


{/* <Radio value={1}>除法</Radio>
<Radio value={2}>增长量</Radio>
<Radio value={3}>加法</Radio>
<Radio value={4}>减法</Radio>
<Radio value={5}>两位数乘法</Radio>
<Radio value={6}>三位数乘法</Radio>
<Radio value={7}>特殊分数</Radio>
<Radio value={8}>高难度除法</Radio>
<Radio value={9}>3*1乘法</Radio>
<Radio value={10}>2*1乘法</Radio> */}

const Calc = () => {
    const [progress, setProgress] = useState(0)


    return <div className="min-h-screen p-3">
        <div className="text-gray-600 mb-2">基础计算</div>
        
        <div className="flex">
            <Anchor component={Link} href="/calc/division">
                <Button variant="filled" size="md">除法</Button>
            </Anchor>
        </div>

        <div className="flex-center">

        </div>
    </div>
}

export default Calc
