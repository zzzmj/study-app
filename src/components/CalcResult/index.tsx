import cn from '@/utils/cn'
import classes from './index.module.css'
import { RingProgress, Text, Card, Divider, Grid, Table } from '@mantine/core'
import { useMemo } from 'react'

const testData = [
    {
        id: '11',
        data: [723, 170],
        formatAnswer: 425,
        value: '424',
    },
    {
        id: '12',
        data: [654, 527],
        formatAnswer: 124,
        value: '103',
    },
    {
        id: '13',
        data: [551, 839],
        formatAnswer: 656,
        value: '652',
    },
    {
        id: '14',
        data: [880, 978],
        formatAnswer: 899,
        value: '890',
    },
    {
        id: '15',
        data: [550, 940],
        formatAnswer: 585,
        value: '561',
    },
    {
        id: '16',
        data: [413, 867],
        formatAnswer: 476,
        value: '487',
    },
    {
        id: '17',
        data: [512, 333],
        formatAnswer: 153,
        value: '165',
    },
    {
        id: '18',
        data: [671, 942],
        formatAnswer: 712,
        value: '690',
    },
    {
        id: '19',
        data: [766, 605],
        formatAnswer: 126,
        value: '126',
    },
    {
        id: '20',
        data: [122, 771],
        formatAnswer: 158,
        value: '145',
    },
]

const errorAnalysis = (input: number, answer: number) => {
    return Math.abs(input - answer) / answer <= 0.03
}
const CalcResult = ({ data = testData, time = 60 }: any) => {
    const accuracy = useMemo(() => {
        return (data.filter((item: any) => errorAnalysis(parseInt(item.value), item.formatAnswer))).length / data.length * 100
    }, [data])

    return (
        <div className="p-4 max-w-3xl m-auto">
            <Card withBorder radius="md" className={classes.card}>
                <div className="flex mb-2 justify-between items-center px-4">
                    <div className='flex-center'>
                        <RingProgress
                            sections={[{ value: accuracy, color: 'teal' }]}
                            label={
                                <Text c="teal" fw={700} ta="center" size="xl">
                                    {accuracy}%
                                </Text>
                            }
                        />
                    </div>
                    <Text fw={700} size='md'>完成时间：{time}s</Text>
                </div>

                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th className="text-center">算式</Table.Th>
                            <Table.Th className="text-center">输入答案</Table.Th>
                            <Table.Th className="text-center">正确答案</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {data.map((item: any, index: number) => {
                            const { formula, data, value, formatAnswer } = item

                            const isRight = errorAnalysis(parseInt(value), formatAnswer)
                            const cls = cn({
                                'teal.1': isRight,
                                'red.1': !isRight,
                            })
                            return (
                                <Table.Tr bg={cls} key={index}>
                                    <Table.Td className="text-center">
                                        <Text>{data[0]}</Text>
                                        <Divider className="w-[40%] m-auto !my-0" my="sm" color="#333" />
                                        <Text>{data[1]}</Text>
                                    </Table.Td>
                                    <Table.Td className="text-center">
                                        <Text>{value}</Text>
                                    </Table.Td>
                                    <Table.Td className="text-center">
                                        <Text>{formatAnswer}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
            </Card>
        </div>
    )
}

export default CalcResult
