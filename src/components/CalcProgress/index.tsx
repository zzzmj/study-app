'use client'

import { Text, Progress, Card } from '@mantine/core'

const CalcProgress = ({ value = 0, total = 10 }) => {

    const p = (value / total) * 100
    return (
        <div className='p-4'>
            <div>
                <Text fz="lg" fw={500}>
                    {value} / {total}
                </Text>

                
            </div>
            <Progress value={p} mt="md" size="xl" radius="xl" />
        </div>
    )
}

export default CalcProgress
