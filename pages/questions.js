import { Layout, Questions as QuestionsContainer } from 'containers';

export default function Home() {
    return (
        <Layout isHome={false}>
            <QuestionsContainer />
        </Layout>
    )
}
