import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    // we are creating a new database named 'contact_db' which will be using version 1 of the database.
    openDB('contact_db', 1, {
        // add database schema if it has not already be init
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts sore already exists');
                return;
            }
            // create a new object store for the data and give it a key name of ';id'/ which will increment automatically
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            console.log('contacts store');
        }
    })
}


export const getDb = async () => {
    console.log('get from the database');

    // create connection to idb database and the version we want to use
    const contactDb = await openDB('contact_db', 1);

    // create a new transaction and specify the store and data privs
    const tx = contactDb.transaction('contacts', 'readonly');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use the .getAll() method to get all the data in the database.
    const request = store.getAll();

    // get confirmation of the req
    const result = await request;
    console.log('result.value', result);
    return result;

};

// export a function we will use to post to database.

export const postDb = async (name, email, phone, profile) => {
    console.log('post to the database');

    // create connection to the database and specify version
    const contactDb = await openDB('contact_db', 1);

    // create new transationc and specify the store and data privs
    const tx = contactDb.transaction('contacts', 'readwrite');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use the .add() method on the store and pass in the content.
    const request = store.add({ name: name, email: email, phone: phone, profile: profile });

    // get confirmation of the request.

    const result = await request;
    console.log( 'data svaed to database', result);
}