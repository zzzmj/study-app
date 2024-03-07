import Header from '@/components/Header'
import { WebsiteLogo } from '@/components/WebsiteLogo'
import { Anchor, Box, Button, Card, Grid, Text } from '@mantine/core'
import cn from '@/utils/cn'
import Link from 'next/link'


const moduleList = [
    { letter: 'yan yu li jie', text: '言语理解', },
    { letter: 'zi liao fen xi', text: '资料分析', },
    { letter: 'pan duan tui li', text: '判断推理', },
    { letter: 'shu liang guan xi', text: '数量关系', },
]

export default function Home() {

    return <div className="fl">
        <Header />

        <div className='flex-center flex-col mt-10'>
            <WebsiteLogo size={220} />
            <Text className='mt-10 text-3xl font-bold' maw={500} ta={'center'} >
                Your Ultimate Study Copilot
            </Text>
            <Text className='mt-3' maw={500} ta={'center'} size='lg'>

            ZYStudy is an webapp to craft exactly the content experience you’d like to have – built for learners.
                {/* 挺傻，但我们的脑子就是这么工作的，讲道理没用。就像骑车或游泳一样，傻反而有用。

大脑对规律有本能的渴望，你给出足够的有效样本，它就能抽取出其中的规律，然后把规律埋在潜意识里，未来以极低的功耗调用。这意味着真正的习得是无感知的，使用时也是无感知的。哪里有感知，哪里就有问题。

对于“本能塑造型”的技能（语言，体育，音乐，绘画...）直接告诉大脑“正确答案”是徒劳的，因为它不需要答案，它需要体验。 */}
            </Text>

            <div className='mt-10'>
                <Button component={Link} href={"/admin"}>Get Started</Button>
            </div>


            <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    moduleList.map((item, index) => {
                        return (
                            <Anchor key={index}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder className={cn('flex-center flex-col font-["YaoSuiXin"]')}>
                                    <Text className='text-5xl'>{item.text}</Text>
                                    <Text className='text-xl'>{item.letter}</Text>
                                </Card>
                            </Anchor>
                        )
                    })
                }
            </div>
        </div>

        <div className='footer flex-center mt-20'>
            <Text c={"gray.6"}>© 2024 Made with ♥︎ in zzzmj. All rights reserved.</Text>
        </div>
    </div>
}
