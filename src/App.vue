<template>
  <v-app>
    <v-main>
      <vote/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Question from './components/Question';
import vote from './components/vote';

export default {
  name: 'App',

  components: {
    vote,
  },

  data: () => ({
    //
  }),
};
</script>
