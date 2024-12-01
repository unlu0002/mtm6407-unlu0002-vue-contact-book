// 

// THis is the key for storing contacts in localStorage
const CONTACTS_STORAGE_KEY = 'contacts'

// Gets all contacts from localStorage
export const getContacts = () => {

  const contacts = localStorage.getItem(CONTACTS_STORAGE_KEY)

  return contacts ? JSON.parse(contacts) : []

}

// Save contacts to localStorage
export const saveContacts = (contacts) => {

  localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts))

}

// Adds a new contact
export const addContact = (contact) => {

  const contacts = getContacts()

  // Add an id to the contact
  contact.id = Date.now()
  contacts.push(contact)
  saveContacts(contacts)
  return contact
}


// Updates contact
export const updateContact = (updatedContact) => {

  const contacts = getContacts()

  const index = contacts.findIndex(contact => contact.id === updatedContact.id)

  if (index !== -1) {

    contacts[index] = updatedContact

    saveContacts(contacts)

    return true

  }

  return false
}


// Delete contact
export const deleteContact = (contactId) => {

  const contacts = getContacts()

  const filteredContacts = contacts.filter(contact => contact.id !== contactId)

  saveContacts(filteredContacts)
}




export const getContactById = (contactId) => {

  const contacts = getContacts()

  return contacts.find(contact => contact.id === contactId)
}