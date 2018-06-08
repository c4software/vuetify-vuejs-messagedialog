<template>
  <messageDialog
    :value="state.isOpen"
    :title="state.title"
    :text="state.text"
    :closeText="state.closeText"
    :closeColor="state.closeColor"
    v-on:closeAction="emmitClose"
  />
</template>

<script>
  export default {
    name: 'PromiseVuetifyMessageDialog',
    data(){
      return {
        state: {
          isOpen: false,
          title: "",
          text: "",
          closeText: "",
          closeColor: "",
          promiseResolver: undefined,
          promiseRejecter: undefined
        }
      }
    },
    methods: {
      commit: function(newState) {
        this.state = newState;
      },
      emmitClose: function(){
        if(this.state.promiseResolver){
          this.state.promiseResolver(true);
          this.state.isOpen = false;
        }
      }
    }
  }
</script>