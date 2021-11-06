<template>  
 <Cars/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cars from './components/Cars.vue';

export default defineComponent({
  name: 'App',
  components: {
    Cars
  }
});
</script>
