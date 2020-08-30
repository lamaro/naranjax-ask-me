import { firebase } from 'lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    // res.setHeader('Access-Control-Allow-Credentials', true)
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    // res.setHeader(
    //     'Access-Control-Allow-Headers',
    //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    // )
    if (req.method === 'POST') {
        const { name, company, question } = req.body;
        await firebaseDB.ref('questions').push({
            name,
            company,
            question,
            highlight: false
        }, function (error) {
            if (error) {
                console.log('Hubo un error', error)
                res.statusCode = 400
                res.json({ status: 'error', error })
            } else {
                res.statusCode = 200
                res.json({ status: 'added', name, company, question })
            }
        })
    } else {
        res.statusCode = 405
        res.json({ message: 'We only support POST' });
    }

}
