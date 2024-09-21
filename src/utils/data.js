let contact = [
    {
        id : 1,
        nama : 'arjuna',
        tag : 'arjun'
    },
    {
        id : 2,
        nama : 'arjuna',
        tag : 'arjun'
    },
    {
        id : 3,
        nama : 'arjuna',
        tag : 'arjun'
    }
];

function getContacts(){
    return contact;
}

function addContact(contacts){
    contact = [...contact, { id : +new Date(), ...contacts}]
}

export {getContacts, addContact}