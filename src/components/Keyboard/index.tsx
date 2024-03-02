import cn from '@/utils/cn'
import classes from './index.module.css'
import { Button } from '@mantine/core'

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Keyboard = ({ onChange, onSubmit, onCancel }: any) => {


    return <div className="grid fixed bottom-0 left-0 right-0">
        <div className={cn('grid', classes['kb-wrap'])}>
            {numberList.map(item => {
                return <Button onClick={() => onChange(item)} radius={0} variant="light" color="gray" className='flex-center h-20 text-3xl' key={item}>
                    {item}
                </Button>
            })}
            <Button onClick={onCancel} radius={0} variant='light' color="rgba(8, 8, 8, 1)" className='flex-center h-20 text-xl'>清除</Button>
            <Button onClick={() => onChange(0)} radius={0}  variant="light" color="gray" className='flex-center h-20 text-3xl'>
                0
            </Button>
            <Button onClick={onSubmit} radius={0} className='flex-center h-20 text-xl'>提交</Button>
        </div>
    </div>
}

export default Keyboard