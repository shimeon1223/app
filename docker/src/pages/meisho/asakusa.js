import Head from 'next/head'
import { Divider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
export default function kyoto(){
return(
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>�󑐏Љ�</title>
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

    <h1 className="TITLE">�󑐏Љ�</h1> 
    <Tabs>
        <TabList>
            <Tab>����</Tab>
            <Tab>�܏d��</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>����̎ʐ^</h2>
                        <Image src="/mysite/images/��/kaminarimon.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='30px' color='blue'>����</Text>
                                <Text>�󑐂̏ے��I���݂ł���A����B</Text>
                                <Text>���̐^���ʂ���̈ꖇ�B</Text>
                                <Text>�������̐l�C�Ԃ�ł��̂������l���݂��ʐ^��������Ď���B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�܏d���̎ʐ^</h2>
                        <Image src="/mysite/images/��/7904.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>����</Text>
                                <Text>�����ʂ������ƁA�����قǂŌ����Ă���܏d���B</Text>
                                <Text>�����ɉf���闧���p�Ɏv�킸�ꖇ�B</Text>
                                <Text>���ӂ̕��͋C�������f���錚�z���B</Text>
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