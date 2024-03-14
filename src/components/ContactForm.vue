<template>
  <section class="contact-form-wrapper">
    <form @submit.prevent ref="form" class="contact-form">
      <div class="title-bar">
        <h2 class="title">Contact</h2>
      </div>
      <EmailInput v-model="email" class="email floating-label" />
      <input v-model="subject" type="hidden" name="subject" value="Contact request from personal website" />
      <TextInput v-model="message" label="Message" :area="true" />
      <div class="d-flex align-items-center">
        <button @click="sendMessage" class="btn btn-primary" :disabled="messageSent">
          {{ submitButtonLabel }}
        </button>
        <button type="button" class="btn cancel" aria-label="Close" @click="$emit('close')">Cancel</button>
        <!-- <span class="message-result" v-if="messageSent">
          {{ messageSuccess ? 'Sent!' : 'Please refresh the page and try again!' }}
        </span> -->
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import EmailInput from './EmailInput.vue';
import TextInput from './TextInput.vue';
import { app as firebaseApp } from '@/firebase';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { onKeyStroke } from '@vueuse/core';

import * as EmailValidator from 'email-validator';

const email = ref('');
const message = ref('');
const subject = ref('');

const submitButtonLabel = ref('Send');

const messageSent = ref(false);
const messageSuccess = ref(false);

onKeyStroke(['Escape'], (e) => {
  e.preventDefault();
  emit('close');
});

async function sendMessage() {
  if (messageSent.value) return;
  if (!email.value || !message.value) return;
  if (!EmailValidator.validate(email.value)) return;
  if (!message.value.trim()) return;

  const db = getFirestore(firebaseApp);

  submitButtonLabel.value = 'Sending...';

  try {
    await addDoc(collection(db, 'contactformmessages'), {
      email: email.value,
      message: message.value,
      subject: subject.value,
    });

    messageSuccess.value = true;
    submitButtonLabel.value = 'Sent!';
  } catch (error) {
    messageSuccess.value = false;
    submitButtonLabel.value = 'Failed!';
  }
  messageSent.value = true;
}

const form = ref(null);
const emit = defineEmits(['close']);
onClickOutside(form, () => {
  emit('close');
});
</script>

<style>
.contact-form-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-weight: 400;
    }
  }

  .contact-form {
    margin: auto;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.15);
    margin-top: 2rem; /* from top of viewport */
    max-width: 500px;
    background-color: whitesmoke;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }

    & > :nth-last-child(2) {
      margin-bottom: 1rem;
    }

    & .input {
      display: block;
      height: 40px;
      width: 100%;
      padding: 0.5rem;
    }
  }

  & .btn {
    margin-right: 1rem;
  }
}

@media screen and (max-height: 572px) and (orientation: landscape) {
  .contact-form {
    margin-top: 0;
    width: 100%;
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
  }
}

.message-result {
  margin-left: 0.5rem;
}
</style>
