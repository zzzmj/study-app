'use client'

import { ColorSchemeControl } from '@/components/Header/ColorSchemeControl'
import { WebsiteLogo } from '@/components/WebsiteLogo'
import { Anchor, AppShell, Button, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

{
    /* <Radio value={1}>除法</Radio>
<Radio value={2}>增长量</Radio>
<Radio value={3}>加法</Radio>
<Radio value={4}>减法</Radio>
<Radio value={5}>两位数乘法</Radio>
<Radio value={6}>三位数乘法</Radio>
<Radio value={7}>特殊分数</Radio>
<Radio value={8}>高难度除法</Radio>
<Radio value={9}>3*1乘法</Radio>
<Radio value={10}>2*1乘法</Radio> */
}

const Calc = () => {
    const [opened, { toggle }] = useDisclosure()
    return (
        <div className='p-4'>
            <div className="text-gray-600 mb-2">基础计算</div>
            <div className="flex">
                <Button component={Link} href="/admin/calc/division" variant="filled" size="md">
                    除法
                </Button>
            </div>

            <div className="text-gray-600 mb-2 mt-8">重点题型</div>
            <div className="flex">
                <Button component={Link} href="/admin/calc/mixed-rate" variant="filled" size="md">
                    混合增长率
                </Button>
            </div>
        </div>
    )
}

export default Calc
