import Head from 'next/head';
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
export default function Home() {
    return (
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>�����Љ�</title>
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


        <div className="container">
            <Link className="item" href="/meisho/asakusa">
                <Image src='mysite/images/��/kaminarimon.jpg' className="img_article" alt=""/>
                <p>��</p>
            </Link>
            <Link className="item" href="/meisho/kyoto">
                <Image src="/mysite/images/���s/kiyomizudera.jpg" className="img_article" alt=""/>
                <p>���s</p>
            </Link>
            <Link className="item" href="/meisho/shinjuku">
                <Image src="mysite/images/�V�h/sakura1.jpg" className="img_article" alt=""/>
                <p>�V�h</p>
            </Link>
            <Link className="item" href="/meisho/disney">
                <Image src="mysite/images/�f�B�Y�j�[/7897.jpg" className="img_article" alt=""/>
                <p>�f�B�Y�j�[</p>
            </Link>
            <Link className="item" href="/meisho/nikko">
                <Image src="mysite/images/����/sanzaru.jpg" className="img_article" alt=""/>
                <p>����</p>
            </Link>
        </div>


</div>
    );
}

