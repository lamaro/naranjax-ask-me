import { FormBasic } from 'components'
import Link from 'next/link'
export default function Home() {
    return (
        <>
            <div className="inner">
                <h1 className="title">
                    Haceme tu
                <Link href="/questions">
                        <a> pregunta!</a>
                    </Link>
                </h1>
                <FormBasic />
            </div>
        </>
    )
}