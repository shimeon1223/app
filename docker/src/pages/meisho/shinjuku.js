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
            <title>�V�h�Љ�</title>
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

    <h1 className="TITLE">�V�h�Љ�</h1> 
    <Tabs>
        <TabList>
            <Tab>�V�h�䉑</Tab>
            <Tab>���O�s���̎�</Tab>
        </TabList>
        <TabPanels>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�V�h�䉑�̎ʐ^</h2>
                        <Image src="/mysite/images/�V�h/sakura3.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>���z</Text>
                                <Text>�������ꂢ�������B</Text>
                                <Text>�L���������ǐl�������ς������B</Text>
                                <Text>�����Ԏ��R��������ꂽ�B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>���̍��̎ʐ^</h2>
                        <Image src="/mysite/images/�V�h/sakura2.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>���z</Text>
                                <Text>���O�Y�ꂽ���̍��B</Text>
                                <Text>�Ȃ��Ȃ����ꂢ�������B</Text>
                                <Text>�T���Ă݂ĂˁB</Text>
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