'use client'

import { ColorSchemeControl } from '@/components/Header/ColorSchemeControl'
import { WebsiteLogo } from '@/components/WebsiteLogo'
import { Anchor, AppShell, Button, Burger, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './layout.module.css'
import Link from 'next/link'

export default function AdminLayout({ children }: any) {
    return (
        <AppShell
            header={{ height: 50 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                // collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className="flex items-center px-4 justify-between">
                <WebsiteLogo size={105} />

                <div>
                    <ColorSchemeControl />
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavLink component={Link} href="/admin/calc" label="速算练习"></NavLink>
            </AppShell.Navbar>
            <AppShell.Main className={classes.main}>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
