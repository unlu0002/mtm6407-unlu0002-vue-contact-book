

<template>

  <div class="contact-details">

    <div v-if="contact" class="contact-card">

      <h2>Contact Details</h2>
      
      <div class="info-group">

        <label>Name:</label>

        <p>{{ contact.firstName }} {{ contact.lastName }}</p>
      </div>


      <div class="info-group">

        <label>Email:</label>

        <p>{{ contact.email }}</p>

      </div>

      <div class="info-group" v-if="contact.phone">

        <label>Phone:</label>

        <p>{{ contact.phone }}</p>

      </div>


      <div class="button-group">

        <button @click="editContact" class="edit-btn">Edit</button>

        <button @click="confirmDelete" class="delete-btn">Delete</button>

      </div>

    </div>

    <div v-else class="not-found">

      Contact not found.   
    </div>

    <!-- Delete popup -->

    <div v-if="showDeleteConfirm" class="delete-dialog">

      <div class="delete-dialog-content">

        <p>Are you sure you want to delete this contact?</p>

        <div class="dialog-buttons">

          <button @click="deleteContact" class="confirm-btn">Delete</button>

          <button @click="showDeleteConfirm = false" class="cancel-btn">Cancel</button>
        </div>

      </div>

    </div>

  </div>

</template>




<script>

  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { getContactById, deleteContact as removeContact } from '../utils/localStorage'


  export default {
    props: {
      id: {
        required: true
      }
    },


    setup(props) {

      const router = useRouter()

      const contact = ref(null)

      const showDeleteConfirm = ref(false)


      onMounted(() => {

        contact.value = getContactById(Number(props.id))
      })

      const editContact = () => {

        router.push(`/contact/${props.id}/edit`)
      }

      const confirmDelete = () => {

        showDeleteConfirm.value = true
      }

      const deleteContact = () => {

        removeContact(Number(props.id))

        router.push('/')
      }


      return {

        contact,

        showDeleteConfirm,

        editContact,

        confirmDelete,

        deleteContact
      }

    }


  }

</script>




<style scoped>

.contact-details {

  max-width: 600px;

  margin: 0 auto;
}

.contact-card {

  background: white;

  padding: 20px;

  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

h2 {
  text-align: center;

  margin-bottom: 20px;
}

.info-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;

  color: #666;

}

p {
  margin: 5px 0;

  font-size: 16px;
}

.button-group {
  margin-top: 20px;

  display: flex;

  gap: 10px;
}

button {

  padding: 10px 20px;

  border: none;

  border-radius: 4px;

  cursor: pointer;

  font-size: 16px;

  flex: 1;
}

.edit-btn {

  background: #0088CC;

  color: white;
}

.delete-btn {
  background: #CC0000;
  color: white;
}

.not-found {

  text-align: center;

  padding: 20px;

  color: #666;

}

.delete-dialog {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0,0,0,0.5);

  display: flex;

  align-items: center;

  justify-content: center;
}

.delete-dialog-content {

  background: white;

  padding: 20px;

  border-radius: 8px;

  text-align: center;
}

.dialog-buttons {

  margin-top: 20px;

  display: flex;

  gap: 10px;
}

.confirm-btn {

  background: #CC0000;

  color: white;
}

.cancel-btn {
  background: #666;
  color: white;
}

button:hover {
  opacity: 0.9;
}
</style>