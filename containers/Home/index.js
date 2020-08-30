import { FormBasic } from 'components'
import Link from 'next/link'   
export default function Home() {
    return (
        <>
            <h1 className="title">
                Ask Me 
                <Link href="/questions">
                 <a> something!</a>
                </Link>
            </h1>
            <FormBasic />
        </>
    )
}