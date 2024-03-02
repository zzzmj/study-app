import cn from '@/utils/cn'
import classes from './index.module.css'
import { Box, Button, Card, Divider, Grid } from '@mantine/core'

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const CalcResult = ({ data }: any) => {


    return <div className="grid fixed bottom-0 left-0 right-0">
        <Card>
            <div className='flex-center'>
                <div>正确率：</div>
                <div>完成时间：</div>
            </div>

            <Grid className='grid'>
                {data.map((item, index) => {
                    const { formula, data, value, formatAnswer, errorAnalysis } = item

                    const isRight = errorAnalysis(parseInt(value), formatAnswer)
                    return <Grid key={index}>
                        <Grid.Col span={4}>
                            <div className="text-3xl">{data[0]}</div>
                            <Divider my="sm" color="#333" />
                            <div className="text-3xl">{data[1]}</div>
                        </Grid.Col>
                        <Grid.Col span={4}>1</Grid.Col>
                        <Grid.Col span={4}>1</Grid.Col>
                    </Grid>
                })}
            </Grid>
        </Card>
    </div>
}

export default CalcResult