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

    <h1 className="TITLE">���s�Љ�</h1> 
    <Tabs>
        <TabList>
            <Tab>������</Tab>
            <Tab>��{����</Tab>
            <Tab>�N�w�̓�</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�������̎ʐ^</h2>
                        <Image src="/mysite/images/���s/kiyomizudera.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical'/>
                            <div>
                                <Text fontSize='20px' color='blue'>���z</Text>
                                <Text>�߂��Ⴍ����l���đ�ς������B</Text>
                                <Text>�s���܂ō₪�����������B</Text>
                                <Text>�i�F�͗ǂ������B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>��{�����̎ʐ^</h2>
                        <Image src="/mysite/images/���s/senhontorii.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>���z</Text>
                                <Text>�l�͂���܂肢�Ȃ������B</Text>
                                <Text>��א_�Ђ̏�܂ōs�����ɐm�a�������B</Text>
                                <Text>�ŏI�������������J���ނ������B</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>�N�w�̓��̎ʐ^</h2>
                        <Image src="/mysite/images/���s/tetsugakunomichi.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>���z</Text>
                                <Text>���|�I�����n�B</Text>
                                <Text>�ߏ��Ɏ����Γ����邯�ǐ삪���邾���ŕ���o��C������B</Text>
                                <Text>�U���ɂ悳�����B</Text>
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