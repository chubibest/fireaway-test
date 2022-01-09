const admin =  require('firebase-admin')

// set the projectId for your project
const projectId = ''

// Add a service account json file named 'key.json' to the root directory
const serviceAccount = require('./key.json')

const config = { credential: admin.credential.cert(serviceAccount), projectId }
admin.initializeApp(config)


const db = admin.firestore()

const collection = db.collection('')

const db = admin.firestore()
const fieldValue = admin.firestore.FieldValue

const migration = fireaway({
    db,
    fieldValue
})

migration('orders', fieldToField('formerFieldName', 'newFieldName'))
collection.get().then((value) => value.docs.forEach((doc) => console.log(doc)))
