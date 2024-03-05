'use client'

import React from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import cx from 'clsx'
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { HeaderControl } from './HeaderControl'
import classes from './ColorSchemeControl.module.css'

export function ColorSchemeControl() {
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

    const isDark = computedColorScheme === 'dark'
    return (
        <HeaderControl
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            tooltip={`${isDark ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle color scheme"
        >
            {isDark ? (
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            ) : (
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            )}
        </HeaderControl>
    )
}
