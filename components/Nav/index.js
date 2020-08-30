import { Container } from './styles'
import Link from 'next/link'    
export default function Nav() {
    return (
        <Container>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/questions"><a>Questions Roll</a></Link></li>
            </ul>
        </Container>
    )
}