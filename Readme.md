Ever wondered how you could make changes to documents accross an entire firestore collection, Here’s how:

Install the fireaway library

npm i fireaway

initialise the library 

    // After initialising admin
 const db = admin.firestore()
    const fieldValue = admin.firestore.FieldValue

    const migration = fireaway({
        db,
        fieldValue
    })


Let's assume we want to create a count field across our entire collection  that keeps track of how often a user has vis
celebrity planet dwellers come to tak 