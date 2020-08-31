import { useState } from 'react'
import { Container as QuestionContainer } from './styles'
import axios from 'axios';

const Question = ({ data }) => {
    const [toDelete, setToDelete] = useState(null)
    const { id, question, company, name, highlight } = data

    const handleDelete = async id => {
        try {
            setToDelete(id)
            const res = await axios.delete('/api/delete', { data: { id } })
        } catch (error) {
            console.log('error axios', error)
        }
    }
    const handleHighlight = async (id, highlight) => {
        try {
            const res = await axios.post('/api/highlight', { id, highlight })
        } catch (error) {
            console.log('error axios', error)
        }
    }

    return (
        <QuestionContainer
            toDelete={toDelete === id ? true : false}
            highlight={highlight}
        >
            <div className="question_content">
                <h2>{question}</h2>
                <p><span>{name}</span> - {company}</p>
            </div>
            <div className="actions_content">
                <button
                    className={!highlight ? "hightlight" : "hightlight_over"}
                    onClick={() => handleHighlight(id, highlight)}
                >
                    {!highlight ? 'Resaltar' : 'No Resaltar'}
                </button>
                <button
                    className="red"
                    onClick={() => handleDelete(id)}
                >Borrar</button>
            </div>
        </QuestionContainer>
    )
}

export default Question;