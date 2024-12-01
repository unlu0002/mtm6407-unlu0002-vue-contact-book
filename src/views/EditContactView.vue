<template>

  <div class="edit-contact">

    <h2>Edit Contact</h2>
    
    <form v-if="contact" @submit.prevent="saveContact" class="contact-form">

      <div class="form-group">

        <label for="firstName">First Name:</label>

        <input 
          type="text" 
          id="firstName"
          v-model="formData.firstName"
          required
        >

      </div>

      <div class="form-group">

        <label for="lastName">Last Name:</label>

        <input 
          type="text" 
          id="lastName"
          v-model="formData.lastName"
          required
        >

      </div>

      <div class="form-group">

        <label for="email">Email:</label>

        <input 
          type="email" 
          id="email"
          v-model="formData.email"
          required
        >
      </div>

      <div class="form-group">

        <label for="phone">Phone:</label>

        <input 

          type="tel" 

          id="phone"

          v-model="formData.phone"
        >

      </div>


      <div class="button-group">

        <button type="submit" class="save-btn">Save Changes</button>

        <button type="button" @click="cancel" class="cancel-btn">Cancel</button>
      </div>

    </form>


    <div v-else class="not-found">
      Contact not found.
    </div>

  </div>

</template>

<script>
  import { reactive, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { getContactById, updateContact } from '../utils/localStorage'

  export default {

    props: {
      id: {
        required: true
      }
    },

    setup(props) {

      const router = useRouter()
      const contact = reactive({})
      
      const formData = reactive({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      })

      onMounted(() => {
        const existingContact = getContactById(Number(props.id))

        if (existingContact) {

          Object.assign(contact, existingContact)

          Object.assign(formData, existingContact)

        }
      })

      const saveContact = () => {

        updateContact({

          id: Number(props.id),

          ...formData
        })
        router.push(`/contact/${props.id}`)
      }

      const cancel = () => {

        router.push(`/contact/${props.id}`)
      }

      return {
        contact,
        formData,
        saveContact,
        cancel
      }

    }

  }
</script>



<style scoped>

  .edit-contact {

    max-width: 600px;

    margin: 0 auto;
  }

  h2 {

    text-align: center;

    margin-bottom: 20px;
  }

  .contact-form {

    background: white;

    padding: 20px;

    border-radius: 8px;

    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {

    display: block;

    margin-bottom: 5px;

    font-weight: bold;
  }

  input {
    width: 100%;

    padding: 8px;

    border: 1px solid #ddd;

    border-radius: 4px;

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
  }

  .save-btn {

    background: #33B249
    ;
    color: white;

    flex: 1;
  }

  .cancel-btn {

    background: #666;

    color: white;

  }

  button:hover {
    opacity: 0.8;
  }

  .not-found {
    text-align: center;

    padding: 20px;
    
    color: #666;
  }

</style>