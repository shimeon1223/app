import Head from 'next/head'
import { Divider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export default function kyoto(){
return(
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>���s�Љ�</title>
        </Head>
    </div>
    <header className="page-header">
        <h1><Link href="/">�����Љ�</Link></h1>
        <nav>
            <ul className="main-nav">
                <li><Link href="/meisho/asakusa">��</Link></li>
                <li><Link href="/meisho/kyoto">���s</Link></li>
                <li><Link href="/meisho/shinjuku">�V�h</Link></li>
                <li><Link href="/meisho/disney">�f�B�Y�j�[</Link></li>
                <li><Link href="/meisho/nikko">����</Link></li>
            </ul>
        </nav>
    </header>

    <h1 className="TITLE">�����Љ�</h1> 
    <Tabs>
        <TabList>
            <Tab>�O��</Tab>
            <Tab>�h���{��</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�O���̎ʐ^</h2>
                        <Image src="/mysite/images/����/sanzaru.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>����</Text>
                                <Text>�������Ƌ{�ɂ����ėL���Ȍ����長�����錾�킴��B</Text>
                                <Text>������ԋ߂ŎB�e�����ꖇ�B</Text>
                                <Text>�\�ɕ����Ă����Ƃ���A�����Ă���ʂ�̃|�[�Y�����Ă���B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�h���{�݂̎ʐ^</h2>
                        <Image src="/mysite/images/����/7899.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>����</Text>
                                <Text>�����ɂďh���{�݂̊O�̒�ɂāA���̔������Ɏv�킸�p�V�����ƈꖇ�B</Text>
                                <Text>�����������R�̒��ɂ���̂͐S�������悤�Ȏv���ɂȂ�B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

        </TabPanels>
    </Tabs>
</div>
);
    
}