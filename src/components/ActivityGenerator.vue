<template>
  <div class="activity-generator">
    <button
      class="activity-generator__generate"
      :disabled="loading"
      @click="loadRandomActivity"
    >
      {{ this.activity ? 'Find something else' : 'I\'m bored!' }}
    </button>


    <div v-if="loading" class="loading-spinner" />
    <ActivityCard v-else :activity="activity" />

  </div>
</template>

<script>
import { getRandomActivity } from '@/api/bored'
import ActivityCard from './ActivityCard.vue'

export default {
  components: { ActivityCard },
  data () {
    return {
      loading: false,
      activity: null,
    }
  },
  methods: {
    async loadRandomActivity() {
      this.loading = true
      this.activity = await getRandomActivity()
      this.loading = false
    }
  },
}
</script>

<style scoped>
.activity-generator__generate {
  margin-bottom: 3rem;
  background-color: crimson;
  color: white;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-family: inherit;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  cursor: pointer;
}

.activity-generator__generate:focus,
.activity-generator__generate:hover {
  opacity: 0.8;
}

.activity-generator__generate:active {
  outline: 4px solid lightcoral;
  opacity: 1;
}
.activity-generator__generate:disabled {
  opacity: 0.6;
  pointer-events: none;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.5rem;
}

.loading-spinner::before {
  content: '';
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 0.5rem solid #ccc;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-name: spin;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
