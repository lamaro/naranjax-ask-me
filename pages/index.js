import { Layout, Home as HomeContainer } from 'containers';

export default function Home() {
    return (
        <Layout isHome={false}>
            <HomeContainer />
        </Layout>
    )
}
