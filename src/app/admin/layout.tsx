'use client'
import { ColorSchemeControl } from '@/components/Header/ColorSchemeControl'
import { WebsiteLogo } from '@/components/WebsiteLogo'
import { Anchor, AppShell, Button, Burger, NavLink } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const navLinkList = [
    { href: '/admin/calc', label: '资料分析', },
    { href: '/admin/yjyu', label: '言语理解', },
    { href: '/admin/pjdr', label: '判断推理', },
    { href: '/admin/uuld', label: '数量关系', },
]

export default function AdminLayout({ children }: any) {
    // const router = useRouter()
    const [opened, { toggle }] = useDisclosure()
    const pathname = usePathname()


    return (
        <AppShell
            header={{ height: 50 }}
            navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header className="flex items-center px-4 justify-between">
                <WebsiteLogo size={105} />
                <div>
                    <ColorSchemeControl />
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                {
                    navLinkList.map((item, index) => {
                        return <NavLink mod={{ active: pathname.includes(item.href)}} key={index} component={Link} href={item.href} label={item.label} />
                    })
                }
            </AppShell.Navbar>
            <AppShell.Main className={"custom-main-height"}>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
