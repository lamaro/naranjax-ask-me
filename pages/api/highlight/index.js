import { firebase } from 'lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    if (req.method === 'POST') {
        const { id, highlight } = req.body;
        await firebaseDB.ref(`questions/${id}`).update({
            highlight: !highlight
        }, function (error) {
            if (error) {
                console.log('Hubo un error', error)
                res.statusCode = 400
                res.json({ status: 'error', error })
            } else {
                res.statusCode = 200
                res.json({ status: 'Highlighted', id, highlight })
            }
        })
    } else {
        res.statusCode = 405
        res.json({ message: 'We only support POST' });
    }

}
