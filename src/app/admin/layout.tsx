'use client'

import { ColorSchemeControl } from '@/components/Header/ColorSchemeControl'
import { WebsiteLogo } from '@/components/WebsiteLogo'
import { Anchor, AppShell, Button, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

export default function AdminLayout({ children }: any) {


    return <AppShell
        header={{ height: 60 }}
        navbar={{
            width: 300,
            breakpoint: 'sm',
            // collapsed: { mobile: !opened },
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
            {children}
        </AppShell.Main>
    </AppShell>
}