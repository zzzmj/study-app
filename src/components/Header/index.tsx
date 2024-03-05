import { ActionIcon, Anchor, Button, Divider } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import React from 'react'
import { ColorSchemeControl } from './ColorSchemeControl'
import { WebsiteLogo } from '@/components/WebsiteLogo'

interface Props {}


const Header: React.FC<Props> = () => {
    return <div>
        <div className='flex justify-between p-4 py-2'>
            <WebsiteLogo />
            <div className='flex justify-center items-center'>
                <div className='flex-center list'>
                    <Anchor className='mr-4' c={"gray.6"}>Home</Anchor>
                    <Anchor className='mr-4' c={"gray.6"}>Download</Anchor>
                    <Anchor className='mr-4' c={"gray.6"}>Github</Anchor>
                    <Anchor className='mr-4' c={"gray.6"}>Help</Anchor>
                </div>

                <ColorSchemeControl />
            </div>
        </div>

        <Divider />
    </div>
}

export default Header
