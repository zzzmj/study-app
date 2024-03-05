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
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className='flex items-center px-4 justify-between'>
                <WebsiteLogo size={105} />

                <div>
                    <ColorSchemeControl />
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
            <AppShell.Main>
                <div className="text-gray-600 mb-2">基础计算</div>

                <div className="flex">
                    <Anchor component={Link} href="/calc/division">
                        <Button variant="filled" size="md">
                            除法
                        </Button>
                    </Anchor>
                </div>

                <div className="flex-center"></div>
            </AppShell.Main>
        </AppShell>
    )
}

export default Calc
