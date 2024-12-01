
<template>
  <div class="home">

    <div class="search-bar">

      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search contacts..."
        class="search-input"
      >

    </div>



    <div class="contacts-list">
    
      <div v-if="filteredContacts.length === 0" class="no-contacts">
        No contacts found.
      </div>
      

      <div 
        v-for="contact in filteredContacts" 
        :key="contact.id" 
        class="contact-item"
        @click="viewContact(contact.id)"
      >

        <span class="name">{{ contact.lastName }}, {{ contact.firstName }}</span>

        <span class="email">{{ contact.email }}</span>

      </div>

    </div>

  </div>

</template>

<script>

  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { getContacts } from '../utils/localStorage'

  export default {

    setup() {

      const router = useRouter()

      const searchQuery = ref('')
      

      // Get contacts and sort them by last name

      const contacts = computed(() => {

        return getContacts().sort((a, b) => 
          a.lastName.localeCompare(b.lastName)
        )

      })



      // Filter contacts based on search query

      const filteredContacts = computed(() => {

        const query = searchQuery.value.toLowerCase()

        return contacts.value.filter(contact => 

          contact.firstName.toLowerCase().includes(query) ||

          contact.lastName.toLowerCase().includes(query)

        )
      })


      const viewContact = (id) => {
        router.push(`/contact/${id}`)
      }


      return {
        searchQuery,
        filteredContacts,
        viewContact
      }

    }

  }
</script>




<style scoped>

  .search-bar {
    margin-bottom: 20px;

    margin-right: 20px;
  }

  .search-input {
    width: 100%;

    padding: 10px;

    border: 1px solid #DDD;

    border-radius: 4px;

    font-size: 16px;
  }

  .contact-item {

    padding: 15px;

    border-bottom: 1px solid #DDD;

    cursor: pointer;

    display: flex;

    justify-content: space-between;
    
    align-items: center;
  }

  .contact-item:hover {
    background-color: #DDD;
  }

  .name {
    font-weight: bold;
  }

  .email {
    color: #666;
  }

  .no-contacts {

    text-align: center;

    padding: 20px;

    color: #666;
  }

</style>