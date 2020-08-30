import { useState, useEffect } from 'react';
import { firebase } from 'lib';
import { Question } from 'components'
const firebaseDB = firebase.database();

const questions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        firebaseDB.ref('questions').on('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    //name: childSnapshot.val().nombre,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            setQuestions(questionsArr)
        })
        return () => {
            firebaseDB.ref('questions').off('value')
        }
    }, []);
    return (
        <>
            <div className="inner">
                <h1>Listado de preguntas</h1>
                {
                    questions.map(
                        (question) => <Question key={question.id} data={question} />
                    )
                }
            </div>
        </>
    )
}

export default questions